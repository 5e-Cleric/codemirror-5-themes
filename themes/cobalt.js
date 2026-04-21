import { EditorView } from '@codemirror/view';

export default EditorView.theme({
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
}, true);