import fs from "fs";
import path from "path";
import postcss from "postcss";
import { fileURLToPath } from "url";
import { EditorView } from "@codemirror/view";

function toCamelCase(prop) {
	return prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function cssToThemeObject(css) {
	const root = postcss.parse(css);
	const theme = {};

	root.walkRules((rule) => {
		const decls = {};

		rule.walkDecls((decl) => {
			decls[toCamelCase(decl.prop)] = decl.value;
		});

		theme[rule.selector] = decls;
	});

	return theme;
}

function getMode(css) {
	const match = css.match(/mode:\s*(dark|light)/i);
	return match ? match[1].toLowerCase() === "dark" : false;
}

function cssToEditorTheme(css) {
	const dark = getMode(css);
	const themeObject = cssToThemeObject(css);

	return {
		theme: themeObject,
		dark,
	};
}

function build() {
	const __dirname = path.dirname(fileURLToPath(import.meta.url));

	const inputDir = path.join(__dirname, "css");
	const outputDir = path.join(__dirname, "dist");

	if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

	const files = fs.readdirSync(inputDir).filter((f) => f.endsWith(".css"));

	const themes = {};

	for (const file of files) {
		const css = fs.readFileSync(path.join(inputDir, file), "utf8");
		const name = file.replace(".css", "");

		const { theme, dark } = cssToEditorTheme(css);

		themes[name] = {
			extension: `EditorView.theme(${JSON.stringify(theme, null, 2)}, { dark: ${dark} })`,
		};
	}

	const output = `
import { EditorView } from "@codemirror/view";

const themes = {
${Object.entries(themes)
	.map(([name, val]) => `  ${name}: ${val.extension}`)
	.join(",\n")}
};

export default themes;
`;

	fs.writeFileSync(path.join(outputDir, "themes.js"), output.trim());
}

build();
