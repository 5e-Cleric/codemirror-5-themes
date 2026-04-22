## A library of custom themes for CodeMirror 6.

`codemirror-5-themes` brings back all our beloved themes from Codemirror 5, mostly updated to work with the current CSS-in-JS syntax used.

---

### Table of contents

- [Installation](#installation)
    - [codemirror-5-themes](#@fseguraicodemirror-5-themes)
    - [Using a Specific Theme](#using-a-specific-theme)
- [More Resources](#more-resources)
    - [Available Themes](#available-themes)
- [License](#license)

## Installation

### codemirror-5-themes

To add `codemirror-5-themes` along with CodeMirror 6 to your `package.json` use the following commands.

```bash
npm install codemirror-5-themes codemirror@^6.0.0 --save
```

### Using a Theme

Import the desired theme from the package and apply it to your CodeMirror instance as shown below.

```javascript
import { EditorView, basicSetup } from "codemirror";
import { markdown } from "@codemirror/lang-markdown";
import themes from "codemirror-5-themes";

const abbotTheme = themes["abbot"];

let editor = new EditorView({
    doc: "# Hello World",
    extensions: [basicSetup, markdown(), abbotTheme],
    parent: document.body
});
```

Read the [CodeMirror documentation](https://codemirror.net/6/examples/styling/) for more details about themes.

### Available Themes

<div style="display: flex; gap: 40px;">

<div>

- 3024-day
- 3024-night
- abbott
- abcdef
- ambiance-mobile
- ambiance
- ayu-dark
- ayu-mirage
- base16-dark
- base16-light
- bespin
- blackboard
- cobalt
- colorforth
- darcula
- darkvision
- dracula
- duotone-dark
- duotone-light
- eclipse
- elegant
- erlang-dark
- gruvbox-dark
- hopscotch
- icecoder
- idea
- isotope
- juejin
- lesser-dark
- liquibyte
- lucario
- material-darker
- material-ocean

</div>

<div>

- material-palenight
- material
- mbo
- mdn-like
- midnight
- monokai
- moxer
- neat
- neo
- night
- nord
- oceanic-next
- panda-syntax
- paraiso-dark
- paraiso-light
- pastel-on-dark
- railscasts
- rubyblue
- seti
- shadowfox
- solarized
- ssms
- the-matrix
- tomorrow-night-bright
- tomorrow-night-eighties
- ttcn
- twilight
- vibrant-ink
- xq-dark
- xq-light
- yeti
- yonce
- zenburn

</div>

</div>

## License

Licensed under [MIT](https://opensource.org/licenses/MIT).
