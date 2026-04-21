import { EditorView } from '@codemirror/view';

export default EditorView.theme({
  ".CodeMirror": {
    "-Bg": "#293134",
    "-Highlight": "#bcbcbc",
    "color": "#b5858d",
    "background": "#ccc",
    "borderRight": "1px solid #555",
    "backgroundColor": "#1F5763",
    "cursor": "pointer",
    "borderLeft": "1px solid #E0E2E4",
    "transition": "background 0.1s",
    "borderBottom": "#229999 solid 1px",
    "fontStyle": "italic",
    "fontWeight": "bold",
    "WebkitTextStrokeWidth": "0.1px",
    "WebkitTextStrokeColor": "#000000"
  },
  ".CodeMirror-scroll": {
    "borderRight": "1px solid #555",
    "background": "#ccc",
    "backgroundColor": "#1F5763",
    "cursor": "pointer",
    "borderLeft": "1px solid #E0E2E4",
    "transition": "background 0.1s",
    "color": "#b5858d",
    "borderBottom": "#229999 solid 1px",
    "fontStyle": "italic",
    "fontWeight": "bold",
    "WebkitTextStrokeWidth": "0.1px",
    "WebkitTextStrokeColor": "#000000"
  },
  ".CodeMirror-gutters": {
    "borderRight": "1px solid #555",
    "background": "#555",
    "backgroundColor": "var(--bg)",
    "cursor": "pointer",
    "borderLeft": "1px solid #555",
    "transition": "background 0.1s"
  },
  ".CodeMirror-gutter": {
    "backgroundColor": "var(--bg)",
    "cursor": "pointer",
    "borderLeft": "1px solid #555",
    "transition": "background 0.1s",
    "background": "#555"
  },
  "&.CodeMirror-foldgutter": {
    "cursor": "pointer",
    "borderLeft": "1px solid #555",
    "transition": "background 0.1s",
    "background": "#555"
  },
  "&:hover": {
    "background": "#555"
  },
  ".CodeMirror-lines": {
    "backgroundColor": "#1F5763",
    "color": "#b5858d",
    "borderLeft": "1px solid #E0E2E4",
    "background": "#ccc",
    "borderBottom": "#229999 solid 1px",
    "fontStyle": "italic",
    "fontWeight": "bold",
    "WebkitTextStrokeWidth": "0.1px",
    "WebkitTextStrokeColor": "#000000"
  },
  ".CodeMirror-linenumber.CodeMirror-gutter-elt": {
    "backgroundColor": "var(--bg)",
    "color": "#81969A"
  },
  ".CodeMirror-cursor": {
    "borderLeft": "1px solid #E0E2E4"
  },
  ".pageLine": {
    "color": "#000000",
    "background": "#000000",
    "borderBottom": "1px solid #FFFFFF"
  },
  ".CodeMirror-code .CodeMirror-line": {
    "fontStyle": "italic",
    "color": "#b5858d",
    "backgroundColor": "#1F5763",
    "borderBottom": "#229999 solid 1px",
    "fontWeight": "bold",
    "WebkitTextStrokeWidth": "0.1px",
    "WebkitTextStrokeColor": "#000000",
    "background": "#ccc"
  },
  "&.columnSplit": {
    "fontStyle": "italic",
    "color": "inherit",
    "backgroundColor": "#1F5763",
    "borderBottom": "#229999 solid 1px"
  },
  ".cm-header": {
    "fontWeight": "bold",
    "color": "#C51B1B",
    "WebkitTextStrokeWidth": "0.1px",
    "WebkitTextStrokeColor": "#000000"
  },
  ".cm-strong": {
    "color": "#309DD2"
  },
  ".cm-em": {},
  ".cm-link": {
    "color": "#DD6300"
  },
  ".cm-string": {
    "color": "#AA8261"
  },
  ".cm-def": {
    "color": "#2986CC"
  },
  ".cm-variable-2": {
    "color": "#3CBF30"
  },
  ".block:not(.cm-comment)": {
    "color": "#E3E3E3"
  },
  ".inline-block": {
    "color": "#E3E3E3"
  },
  ".cm-tag": {
    "color": "#E3FF00"
  },
  ".cm-attribute": {
    "color": "#E3FF00"
  },
  ".cm-atom": {
    "color": "#c1939a"
  },
  ".cm-number": {
    "color": "#2986CC"
  },
  ".cm-property:not(.cm-error) ~ .cm-variable": {
    "color": "#9e1f9e"
  },
  ".cm-qualifier": {
    "color": "#EE1919"
  },
  ".cm-comment": {
    "color": "#BBC700"
  },
  ".cm-keyword": {
    "color": "white"
  },
  ".cm-error": {
    "color": "#C50202"
  },
  ".CodeMirror-foldmarker": {
    "color": "#F0FF00"
  },
  ".cm-builtin": {
    "color": "#FFFFFF"
  },
  ".dt-highlight": {
    "background": "#ffffff14"
  },
  ".dl-colon-highlight": {
    "background": "#ccc"
  },
  ".dl-highlight.dd-highlight": {
    "color": "#b5858d"
  }
}, true);