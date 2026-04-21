import fs from "fs";
import path from "path";
import postcss from "postcss";
import { EditorView } from "@codemirror/view";
import { fileURLToPath } from "url";

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

	return EditorView.theme(themeObject, { dark });
}

// load all css themes and export them
function loadThemes() {
	const inputDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "css");

	const files = fs.readdirSync(inputDir).filter((f) => f.endsWith(".css"));

	const themes = {};

	for (const file of files) {
		const css = fs.readFileSync(path.join(inputDir, file), "utf8");

		const name = file.replace(".css", "");

		themes[name] = cssToEditorTheme(css);
	}

	return themes;
}

const themes = loadThemes();

export default themes;
