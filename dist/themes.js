import { EditorView } from "@codemirror/view";

const themes = {
  abbot: EditorView.theme({
  "&": {
    "background": "#231c14 ",
    "color": "#d8ff84 "
  },
  ".cm-gutters": {
    "background": "#231c14 ",
    "border": "none"
  },
  ".cm-linenumber": {
    "color": "#fbec5d "
  },
  ".cm-guttermarker": {
    "color": "#f63f05 "
  },
  ".cm-guttermarker-subtle": {
    "color": "#fbb32f "
  },
  ".cm-ruler": {
    "borderColor": "#745d42 "
  },
  ".cm-cursor": {
    "borderColor": "#a0ea00 "
  },
  ".cm-fat-cursor .cm-cursor,\r\n.cm-animate-fat-cursor": {
    "background": "rgba(160, 234, 0, 0.5) "
  },
  ".cm-fat-cursor .cm-cursors": {
    "zIndex": "3"
  },
  ".cm-overwrite .cm-cursor": {
    "borderBottom": "1px solid #a0ea00 ",
    "borderLeft": "none",
    "width": "auto"
  },
  ".cm-secondarycursor": {
    "borderColor": "#00ff7f "
  },
  ".cm-selected,\r\n.cm-focused .cm-selected": {
    "background": "#273900 "
  },
  ".cm-line::selection,\r\n.cm-line > span::selection,\r\n.cm-line > span > span::selection": {
    "background": "#273900 "
  },
  ".cm-line::-moz-selection,\r\n.cm-line > span::-moz-selection,\r\n.cm-line > span > span::-moz-selection": {
    "background": "#273900 "
  },
  ".cm-tab": {
    "color": "#00ff7f "
  },
  ".cm-searching": {
    "background": "#fef3b4 ",
    "color": "#231c14 "
  },
  ".cm-comment": {
    "color": "#fbb32f ",
    "fontStyle": "italic"
  },
  ".cm-string,\r\n.cm-string-2": {
    "color": "#e6a2f3 "
  },
  ".cm-number,\r\n.cm-string.cm-url": {
    "color": "#f63f05 "
  },
  ".cm-invalidchar": {
    "color": "#00ff7f "
  },
  ".cm-atom": {
    "color": "#fef3b4 "
  },
  ".cm-bracket,\r\n.cm-punctuation": {
    "color": "#fef3b4 "
  },
  ".cm-operator": {
    "fontWeight": "bold"
  },
  ".cm-def,\r\n.cm-variable,\r\n.cm-variable-2,\r\n.cm-variable-3": {
    "color": "#8ccdf0 "
  },
  ".cm-builtin,\r\n.cm-property,\r\n.cm-qualifier": {
    "color": "#3f91f1 "
  },
  ".cm-type": {
    "color": "#24a507 "
  },
  ".cm-keyword": {
    "color": "#d80450 ",
    "fontWeight": "bold"
  },
  ".cm-meta": {
    "color": "#ec6c99 "
  },
  ".cm-tag": {
    "color": "#d80450 ",
    "fontWeight": "bold"
  },
  ".cm-attribute": {
    "color": "#24a507 "
  },
  ".cm-header": {
    "color": "#d80450 ",
    "fontWeight": "bold"
  },
  ".cm-hr": {
    "color": "#ec6c99 "
  },
  ".cm-link": {
    "color": "#e6a2f3 "
  },
  ".cm-negative": {
    "background": "#d80450 ",
    "color": "#231c14 "
  },
  ".cm-positive": {
    "background": "#a0ea00 ",
    "color": "#231c14 ",
    "fontWeight": "bold"
  },
  ".cm-error": {
    "background": "#d80450 ",
    "color": "#231c14 "
  },
  ".cm-matchingbracket": {
    "background": "#745d42 ",
    "color": "#231c14 ",
    "fontWeight": "bold"
  },
  ".cm-nonmatchingbracket": {
    "background": "#d80450 ",
    "color": "#231c14 "
  },
  ".cm-matchingtag,\r\n.cm-matchhighlight": {
    "outline": "1px solid #39a78d "
  },
  ".cm-activeLine,\r\n.cm-activeline-gutter": {
    "background": "#3c3022 "
  },
  ".cm-activeLineGutter": {
    "color": "#d8ff84 ",
    "fontWeight": "bold"
  },
  ".cm-gutterElement span": {
    "color": "#f63f05 ",
    "textShadow": "none"
  }
}, { dark: true }),
  cobalt: EditorView.theme({
  ".cm-editor": {
    "background": "#002240",
    "color": "white"
  },
  "div.cm-selected": {
    "background": "#b36539"
  },
  ".cm-line::selection,\r\n.cm-line > span::selection,\r\n.cm-line > span > span::selection": {
    "background": "rgba(179, 101, 57, 0.99)"
  },
  ".cm-line::-moz-selection,\r\n.cm-line > span::-moz-selection,\r\n.cm-line > span > span::-moz-selection": {
    "background": "rgba(179, 101, 57, 0.99)"
  },
  ".cm-gutters": {
    "background": "#002240",
    "borderRight": "1px solid #aaa"
  },
  ".cm-guttermarker": {
    "color": "#ffee80"
  },
  ".cm-guttermarker-subtle": {
    "color": "#d0d0d0"
  },
  ".cm-linenumber": {
    "color": "#d0d0d0"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid white"
  },
  ".cm-comment": {
    "color": "#08f"
  },
  ".cm-atom": {
    "color": "#845dc4"
  },
  ".cm-number,\r\n.cm-attribute": {
    "color": "#ff80e1"
  },
  ".cm-keyword": {
    "color": "#ffee80"
  },
  ".cm-string": {
    "color": "#3ad900"
  },
  ".cm-meta": {
    "color": "#ff9d00"
  },
  ".cm-variable-2,\r\n.cm-tag": {
    "color": "#9effff"
  },
  ".cm-variable-3,\r\n.cm-def,\r\n.cm-type": {
    "color": "white"
  },
  ".cm-bracket": {
    "color": "#d8d8d8"
  },
  ".cm-builtin,\r\n.cm-special": {
    "color": "#ff9e59"
  },
  ".cm-link": {
    "color": "#845dc4"
  },
  ".cm-error": {
    "color": "#9d1e15"
  },
  ".cm-activeLine": {
    "background": "#002d57"
  },
  ".cm-matchingbracket": {
    "outline": "1px solid grey",
    "color": "white"
  }
}, { dark: true })
};

export default themes;