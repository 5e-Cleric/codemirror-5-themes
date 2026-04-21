import { EditorView } from "@codemirror/view";

const themes = {
  "3024-day": EditorView.theme({
  "&": {
    "background": "#f7f7f7",
    "color": "#3a3432"
  },
  ".cm-selectionBackground": {
    "background": "#d6d5d4"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "#d9d9d9"
  },
  ".cm-gutters": {
    "background": "#f7f7f7",
    "borderRight": "0"
  },
  ".cm-gutterElement span": {
    "color": "#db2d20"
  },
  ".cm-linenumber": {
    "color": "#807d7c"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #5c5855"
  },
  ".cm-comment": {
    "color": "#cdab53"
  },
  ".cm-atom": {
    "color": "#a16a94"
  },
  ".cm-number": {
    "color": "#a16a94"
  },
  ".cm-property,\n.cm-attribute": {
    "color": "#01a252"
  },
  ".cm-keyword": {
    "color": "#db2d20"
  },
  ".cm-string": {
    "color": "#fded02"
  },
  ".cm-variable": {
    "color": "#01a252"
  },
  ".cm-variable-2": {
    "color": "#01a0e4"
  },
  ".cm-def": {
    "color": "#e8bbd0"
  },
  ".cm-bracket": {
    "color": "#3a3432"
  },
  ".cm-tag": {
    "color": "#db2d20"
  },
  ".cm-link": {
    "color": "#a16a94"
  },
  ".cm-error": {
    "background": "#db2d20",
    "color": "#5c5855"
  },
  ".cm-activeLine": {
    "background": "#e8f2ff"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "#a16a94"
  }
}, { dark: false }),
  "3024-night": EditorView.theme({
  "&": {
    "background": "#090300",
    "color": "#d6d5d4"
  },
  ".cm-selectionBackground": {
    "background": "#3a3432"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(58 52 50 / 99%)"
  },
  ".cm-gutters": {
    "background": "#090300",
    "borderRight": "0"
  },
  ".cm-gutterElement span": {
    "color": "#db2d20"
  },
  ".cm-linenumber": {
    "color": "#5c5855"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #807d7c"
  },
  ".cm-comment": {
    "color": "#cdab53"
  },
  ".cm-atom": {
    "color": "#a16a94"
  },
  ".cm-number": {
    "color": "#a16a94"
  },
  ".cm-property,\n.cm-attribute": {
    "color": "#01a252"
  },
  ".cm-keyword": {
    "color": "#db2d20"
  },
  ".cm-string": {
    "color": "#fded02"
  },
  ".cm-variable": {
    "color": "#01a252"
  },
  ".cm-variable-2": {
    "color": "#01a0e4"
  },
  ".cm-def": {
    "color": "#e8bbd0"
  },
  ".cm-bracket": {
    "color": "#d6d5d4"
  },
  ".cm-tag": {
    "color": "#db2d20"
  },
  ".cm-link": {
    "color": "#a16a94"
  },
  ".cm-error": {
    "background": "#db2d20",
    "color": "#807d7c"
  },
  ".cm-activeLine": {
    "background": "#2f2f2f"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "abbot": EditorView.theme({
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
  ".cm-gutterElement span": {
    "color": "#f63f05 ",
    "textShadow": "none"
  },
  ".cm-gutterElement span-subtle": {
    "color": "#fbb32f "
  },
  ".cm-ruler": {
    "borderColor": "#745d42 "
  },
  ".cm-cursor": {
    "borderColor": "#a0ea00 "
  },
  ".cm-fat-cursor .cm-cursor,\n.cm-animate-fat-cursor": {
    "background": "rgb(160 234 0 / 50%) "
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
  ".cm-selectionBackground ,\n&.cm-focused .cm-selectionBackground": {
    "background": "#273900"
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
  ".cm-string,\n.cm-string-2": {
    "color": "#e6a2f3 "
  },
  ".cm-number,\n.cm-string.cm-url": {
    "color": "#f63f05 "
  },
  ".cm-invalidchar": {
    "color": "#00ff7f "
  },
  ".cm-atom": {
    "color": "#fef3b4 "
  },
  ".cm-bracket,\n.cm-punctuation": {
    "color": "#fef3b4 "
  },
  ".cm-operator": {
    "fontWeight": "bold"
  },
  ".cm-def,\n.cm-variable,\n.cm-variable-2,\n.cm-variable-3": {
    "color": "#8ccdf0 "
  },
  ".cm-builtin,\n.cm-property,\n.cm-qualifier": {
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
  ".cm-matchingtag,\n.cm-matchhighlight": {
    "outline": "1px solid #39a78d "
  },
  ".cm-activeLine,\n.cm-activeline-gutter": {
    "background": "#3c3022 "
  },
  ".cm-activeLineGutter": {
    "color": "#d8ff84 ",
    "fontWeight": "bold"
  }
}, { dark: true }),
  "abcdef": EditorView.theme({
  "&": {
    "background": "#0f0f0f",
    "color": "#defdef"
  },
  ".cm-selectionBackground": {
    "background": "#515151"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(56 56 56 / 99%)"
  },
  ".cm-gutters": {
    "background": "#555",
    "borderRight": "2px solid #314151"
  },
  ".cm-gutterElement span": {
    "color": "#222"
  },
  ".cm-linenumber": {
    "color": "#fff"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #0f0"
  },
  ".cm-keyword": {
    "color": "darkgoldenrod",
    "fontWeight": "bold"
  },
  ".cm-atom": {
    "color": "#77f"
  },
  ".cm-number": {
    "color": "violet"
  },
  ".cm-def": {
    "color": "#fffabc"
  },
  ".cm-variable": {
    "color": "#abcdef"
  },
  ".cm-variable-2": {
    "color": "#cacbcc"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#def"
  },
  ".cm-property": {
    "color": "#fedcba"
  },
  ".cm-operator": {
    "color": "#ff0"
  },
  ".cm-comment": {
    "color": "#7a7b7c",
    "fontStyle": "italic"
  },
  ".cm-string": {
    "color": "#2b4"
  },
  ".cm-meta": {
    "color": "#c9f"
  },
  ".cm-qualifier": {
    "color": "#fff700"
  },
  ".cm-builtin": {
    "color": "#30aabc"
  },
  ".cm-bracket": {
    "color": "#8a8a8a"
  },
  ".cm-tag": {
    "color": "#fd4"
  },
  ".cm-attribute": {
    "color": "#df0"
  },
  ".cm-error": {
    "color": "#f00"
  },
  ".cm-header": {
    "color": "aquamarine",
    "fontWeight": "bold"
  },
  ".cm-link": {
    "color": "blueviolet"
  },
  ".cm-activeLine": {
    "background": "#314151"
  }
}, { dark: true }),
  "ambiance-mobile": EditorView.theme({
  "&": {
    "boxShadow": "none"
  }
}, { dark: false }),
  "ambiance": EditorView.theme({
  ".cm-header": {
    "color": "blue"
  },
  ".cm-quote": {
    "color": "#24c2c7"
  },
  ".cm-keyword": {
    "color": "#cda869"
  },
  ".cm-atom": {
    "color": "#cf7ea9"
  },
  ".cm-number": {
    "color": "#78cf8a"
  },
  ".cm-def": {
    "color": "#aac6e3"
  },
  ".cm-variable": {
    "color": "#ffb795"
  },
  ".cm-variable-2": {
    "color": "#eed1b3"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#faded3"
  },
  ".cm-property": {
    "color": "#eed1b3"
  },
  ".cm-operator": {
    "color": "#fa8d6a"
  },
  ".cm-comment": {
    "color": "#555",
    "fontStyle": "italic"
  },
  ".cm-string": {
    "color": "#8f9d6a"
  },
  ".cm-string-2": {
    "color": "#9d937c"
  },
  ".cm-meta": {
    "color": "#d2a8a1"
  },
  ".cm-qualifier": {
    "color": "yellow"
  },
  ".cm-builtin": {
    "color": "#99c"
  },
  ".cm-bracket": {
    "color": "#24c2c7"
  },
  ".cm-tag": {
    "color": "#fee4ff"
  },
  ".cm-attribute": {
    "color": "#9b859d"
  },
  ".cm-hr": {
    "color": "pink"
  },
  ".cm-link": {
    "color": "#f4c20b"
  },
  ".cm-special": {
    "color": "#ff9d00"
  },
  ".cm-error": {
    "color": "#af2018"
  },
  ".cm-matchingbracket": {
    "color": "#0f0"
  },
  ".cm-nonmatchingbracket": {
    "color": "#f22"
  },
  ".cm-selectionBackground": {
    "background": "rgb(255 255 255 / 15%)"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(255 255 255 / 10%)"
  },
  "&": {
    "lineHeight": "1.4em",
    "color": "#e6e1dc",
    "backgroundColor": "#202020",
    "boxShadow": "inset 0 0 10px black"
  },
  ".cm-gutters": {
    "background": "#3d3d3d",
    "borderRight": "1px solid #4d4d4d",
    "boxShadow": "0 10px 20px black"
  },
  ".cm-linenumber": {
    "textShadow": "0 1px 1px #4d4d4d",
    "color": "#111",
    "padding": "0 5px"
  },
  ".cm-gutterElement span": {
    "color": "#aaa"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #7991e8"
  },
  ".cm-activeLine": {
    "background": "none repeat scroll 0% 0% rgb(255 255 255 / 3.1%)"
  },
  "&,\n.cm-gutters": {
    "backgroundImage": "url(\"data:image/png;base64,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\")"
  }
}, { dark: true }),
  "ayu-dark": EditorView.theme({
  "&": {
    "background": "#0a0e14",
    "color": "#b3b1ad"
  },
  ".cm-selectionBackground": {
    "background": "#273747"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(39 55 71 / 9900%)"
  },
  ".cm-gutters": {
    "background": "#0a0e14",
    "borderRight": "0"
  },
  ".cm-gutterElement span": {
    "color": "white"
  },
  ".cm-linenumber": {
    "color": "#3d424d"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #e6b450"
  },
  ".cm-fat-cursor .cm-cursor": {
    "backgroundColor": "#a2a8a175"
  },
  ".cm-animate-fat-cursor": {
    "backgroundColor": "#a2a8a175"
  },
  ".cm-comment": {
    "color": "#626a73"
  },
  ".cm-atom": {
    "color": "#ae81ff"
  },
  ".cm-number": {
    "color": "#e6b450"
  },
  ".cm-comment.cm-attribute": {
    "color": "#ffb454"
  },
  ".cm-comment.cm-def": {
    "color": "rgb(57 186 230 / 8000%)"
  },
  ".cm-comment.cm-tag": {
    "color": "#39bae6"
  },
  ".cm-comment.cm-type": {
    "color": "#5998a6"
  },
  ".cm-property,\n.cm-attribute": {
    "color": "#ffb454"
  },
  ".cm-keyword": {
    "color": "#ff8f40"
  },
  ".cm-builtin": {
    "color": "#e6b450"
  },
  ".cm-string": {
    "color": "#c2d94c"
  },
  ".cm-variable": {
    "color": "#b3b1ad"
  },
  ".cm-variable-2": {
    "color": "#f07178"
  },
  ".cm-variable-3": {
    "color": "#39bae6"
  },
  ".cm-type": {
    "color": "#ff8f40"
  },
  ".cm-def": {
    "color": "#fe9"
  },
  ".cm-bracket": {
    "color": "#f8f8f2"
  },
  ".cm-tag": {
    "color": "rgb(57 186 230 / 8000%)"
  },
  ".cm-header": {
    "color": "#c2d94c"
  },
  ".cm-link": {
    "color": "#39bae6"
  },
  ".cm-error": {
    "color": "#f33"
  },
  ".cm-activeLine": {
    "background": "#01060e"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "ayu-mirage": EditorView.theme({
  "&": {
    "background": "#1f2430",
    "color": "#cbccc6"
  },
  ".cm-selectionBackground": {
    "background": "#34455a"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(25 30 42 / 9900%)"
  },
  ".cm-gutters": {
    "background": "#1f2430",
    "borderRight": "0"
  },
  ".cm-gutterElement span": {
    "color": "white"
  },
  ".cm-linenumber": {
    "color": "rgb(61 66 77 / 9900%)"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #fc6"
  },
  ".cm-fat-cursor .cm-cursor": {
    "backgroundColor": "#a2a8a175"
  },
  ".cm-animate-fat-cursor": {
    "backgroundColor": "#a2a8a175"
  },
  ".cm-comment": {
    "color": "#5c6773",
    "fontStyle": "italic"
  },
  ".cm-atom": {
    "color": "#ae81ff"
  },
  ".cm-number": {
    "color": "#fc6"
  },
  ".cm-comment.cm-attribute": {
    "color": "#ffd580"
  },
  ".cm-comment.cm-def": {
    "color": "#d4bfff"
  },
  ".cm-comment.cm-tag": {
    "color": "#5ccfe6"
  },
  ".cm-comment.cm-type": {
    "color": "#5998a6"
  },
  ".cm-property": {
    "color": "#f29e74"
  },
  ".cm-attribute": {
    "color": "#ffd580"
  },
  ".cm-keyword": {
    "color": "#ffa759"
  },
  ".cm-builtin": {
    "color": "#fc6"
  },
  ".cm-string": {
    "color": "#bae67e"
  },
  ".cm-variable": {
    "color": "#cbccc6"
  },
  ".cm-variable-2": {
    "color": "#f28779"
  },
  ".cm-variable-3": {
    "color": "#5ccfe6"
  },
  ".cm-type": {
    "color": "#ffa759"
  },
  ".cm-def": {
    "color": "#ffd580"
  },
  ".cm-bracket": {
    "color": "rgb(92 207 230 / 8000%)"
  },
  ".cm-tag": {
    "color": "#5ccfe6"
  },
  ".cm-header": {
    "color": "#bae67e"
  },
  ".cm-link": {
    "color": "#5ccfe6"
  },
  ".cm-error": {
    "color": "#f33"
  },
  ".cm-activeLine": {
    "background": "#191e2a"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "base16-dark": EditorView.theme({
  "&": {
    "background": "#151515",
    "color": "#e0e0e0"
  },
  ".cm-selectionBackground": {
    "background": "#303030"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(48 48 48 / 99%)"
  },
  ".cm-gutters": {
    "background": "#151515",
    "borderRight": "0"
  },
  ".cm-gutterElement span": {
    "color": "#ac4142"
  },
  ".cm-linenumber": {
    "color": "#505050"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #b0b0b0"
  },
  ".cm-fat-cursor .cm-cursor": {
    "backgroundColor": "#8e8d8875"
  },
  ".cm-animate-fat-cursor": {
    "backgroundColor": "#8e8d8875"
  },
  ".cm-comment": {
    "color": "#8f5536"
  },
  ".cm-atom": {
    "color": "#aa759f"
  },
  ".cm-number": {
    "color": "#aa759f"
  },
  ".cm-property,\n.cm-attribute": {
    "color": "#90a959"
  },
  ".cm-keyword": {
    "color": "#ac4142"
  },
  ".cm-string": {
    "color": "#f4bf75"
  },
  ".cm-variable": {
    "color": "#90a959"
  },
  ".cm-variable-2": {
    "color": "#6a9fb5"
  },
  ".cm-def": {
    "color": "#d28445"
  },
  ".cm-bracket": {
    "color": "#e0e0e0"
  },
  ".cm-tag": {
    "color": "#ac4142"
  },
  ".cm-link": {
    "color": "#aa759f"
  },
  ".cm-error": {
    "background": "#ac4142",
    "color": "#b0b0b0"
  },
  ".cm-activeLine": {
    "background": "#202020"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "base16-light": EditorView.theme({
  "&": {
    "background": "#f5f5f5",
    "color": "#202020"
  },
  ".cm-selectionBackground": {
    "background": "#e0e0e0"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "#e0e0e0"
  },
  ".cm-gutters": {
    "background": "#f5f5f5",
    "borderRight": "0"
  },
  ".cm-gutterElement span": {
    "color": "#ac4142"
  },
  ".cm-linenumber": {
    "color": "#b0b0b0"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #505050"
  },
  ".cm-comment": {
    "color": "#8f5536"
  },
  ".cm-atom": {
    "color": "#aa759f"
  },
  ".cm-number": {
    "color": "#aa759f"
  },
  ".cm-property,\n.cm-attribute": {
    "color": "#90a959"
  },
  ".cm-keyword": {
    "color": "#ac4142"
  },
  ".cm-string": {
    "color": "#f4bf75"
  },
  ".cm-variable": {
    "color": "#90a959"
  },
  ".cm-variable-2": {
    "color": "#6a9fb5"
  },
  ".cm-def": {
    "color": "#d28445"
  },
  ".cm-bracket": {
    "color": "#202020"
  },
  ".cm-tag": {
    "color": "#ac4142"
  },
  ".cm-link": {
    "color": "#aa759f"
  },
  ".cm-error": {
    "background": "#ac4142",
    "color": "#505050"
  },
  ".cm-activeLine": {
    "background": "#dddcdc"
  },
  ".cm-matchingbracket": {
    "color": "#f5f5f5",
    "backgroundColor": "#6a9fb5"
  }
}, { dark: false }),
  "bespin": EditorView.theme({
  "&": {
    "background": "#28211c",
    "color": "#9d9b97"
  },
  ".cm-selectionBackground,\n&.cm-focused .cm-selectionBackground": {
    "background": "#59554f"
  },
  ".cm-gutters": {
    "background": "#28211c",
    "borderRight": "0"
  },
  ".cm-linenumber": {
    "color": "#666"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #797977"
  },
  ".cm-comment": {
    "color": "#937121"
  },
  ".cm-atom": {
    "color": "#9b859d"
  },
  ".cm-number": {
    "color": "#9b859d"
  },
  ".cm-property,\n.cm-attribute": {
    "color": "#54be0d"
  },
  ".cm-keyword": {
    "color": "#cf6a4c"
  },
  ".cm-string": {
    "color": "#f9ee98"
  },
  ".cm-variable": {
    "color": "#54be0d"
  },
  ".cm-variable-2": {
    "color": "#5ea6ea"
  },
  ".cm-def": {
    "color": "#cf7d34"
  },
  ".cm-error": {
    "background": "#cf6a4c",
    "color": "#797977"
  },
  ".cm-bracket": {
    "color": "#9d9b97"
  },
  ".cm-tag": {
    "color": "#cf6a4c"
  },
  ".cm-link": {
    "color": "#9b859d"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  },
  ".cm-activeLine": {
    "background": "#404040"
  }
}, { dark: true }),
  "blackboard": EditorView.theme({
  "&": {
    "background": "#0c1021",
    "color": "#f8f8f8"
  },
  ".cm-selectionBackground": {
    "background": "#253b76"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(37 59 118 / 99%)"
  },
  ".cm-gutters": {
    "background": "#0c1021",
    "borderRight": "0"
  },
  ".cm-gutterElement span": {
    "color": "#fbde2d"
  },
  ".cm-linenumber": {
    "color": "#888"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #a7a7a7"
  },
  ".cm-keyword": {
    "color": "#fbde2d"
  },
  ".cm-atom": {
    "color": "#d8fa3c"
  },
  ".cm-number": {
    "color": "#d8fa3c"
  },
  ".cm-def": {
    "color": "#8da6ce"
  },
  ".cm-variable": {
    "color": "#ff6400"
  },
  ".cm-operator": {
    "color": "#fbde2d"
  },
  ".cm-comment": {
    "color": "#aeaeae"
  },
  ".cm-string": {
    "color": "#61ce3c"
  },
  ".cm-string-2": {
    "color": "#61ce3c"
  },
  ".cm-meta": {
    "color": "#d8fa3c"
  },
  ".cm-builtin": {
    "color": "#8da6ce"
  },
  ".cm-tag": {
    "color": "#8da6ce"
  },
  ".cm-attribute": {
    "color": "#8da6ce"
  },
  ".cm-header": {
    "color": "#ff6400"
  },
  ".cm-hr": {
    "color": "#aeaeae"
  },
  ".cm-link": {
    "color": "#8da6ce"
  },
  ".cm-error": {
    "background": "#9d1e15",
    "color": "#f8f8f8"
  },
  ".cm-activeLine": {
    "background": "#3c3636"
  },
  ".cm-matchingbracket": {
    "outline": "1px solid grey",
    "color": "white"
  }
}, { dark: true }),
  "cobalt": EditorView.theme({
  "&": {
    "background": "#002240",
    "color": "white"
  },
  ".cm-selectionBackground": {
    "background": "#b36539"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(179 101 57 / 99%)"
  },
  ".cm-gutters": {
    "background": "#002240",
    "borderRight": "1px solid #aaa"
  },
  ".cm-gutterElement span": {
    "color": "#ffee80"
  },
  ".cm-gutterElement span-subtle": {
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
  ".cm-number,\n.cm-attribute": {
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
  ".cm-variable-2,\n.cm-tag": {
    "color": "#9effff"
  },
  ".cm-variable-3,\n.cm-def,\n.cm-type": {
    "color": "white"
  },
  ".cm-bracket": {
    "color": "#d8d8d8"
  },
  ".cm-builtin,\n.cm-special": {
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
}, { dark: true }),
  "colorforth": EditorView.theme({
  "&": {
    "background": "#000",
    "color": "#f8f8f8"
  },
  ".cm-gutters": {
    "background": "#0a001f",
    "borderRight": "1px solid #aaa"
  },
  ".cm-gutterElement span": {
    "color": "#ffbd40"
  },
  ".cm-linenumber": {
    "color": "#bababa"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid white"
  },
  ".cm-comment": {
    "color": "#ededed"
  },
  ".cm-def": {
    "color": "#ff1c1c",
    "fontWeight": "bold"
  },
  ".cm-keyword": {
    "color": "#ffd900"
  },
  ".cm-builtin": {
    "color": "#00d95a"
  },
  ".cm-variable": {
    "color": "#73ff00"
  },
  ".cm-string": {
    "color": "#007bff"
  },
  ".cm-number": {
    "color": "#00c4ff"
  },
  ".cm-atom": {
    "color": "#606060"
  },
  ".cm-variable-2": {
    "color": "#eee"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#ddd"
  },
  ".cm-property": {},
  ".cm-operator": {},
  ".cm-meta": {
    "color": "yellow"
  },
  ".cm-qualifier": {
    "color": "#fff700"
  },
  ".cm-bracket": {
    "color": "#cc7"
  },
  ".cm-tag": {
    "color": "#ffbd40"
  },
  ".cm-attribute": {
    "color": "#fff700"
  },
  ".cm-error": {
    "color": "#f00"
  },
  ".cm-selectionBackground ,\n&.cm-focused .cm-selectionBackground": {
    "background": "#333d53"
  },
  ".cm-compilation": {
    "background": "rgb(255 255 255 / 12%)"
  },
  ".cm-activeLine": {
    "background": "#253540"
  }
}, { dark: true }),
  "darcula": EditorView.theme({
  "&": {
    "background": "#2b2b2b",
    "color": "#a9b7c6",
    "fontFamily": "Consolas, Menlo, Monaco, \"Lucida Console\", \"Liberation Mono\",\n        \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Courier New\",\n        monospace, serif"
  },
  ".cm-meta": {
    "color": "#bbb529"
  },
  ".cm-number": {
    "color": "#6897bb"
  },
  ".cm-keyword": {
    "color": "#cc7832",
    "lineHeight": "1em",
    "fontWeight": "bold"
  },
  ".cm-def": {
    "color": "#a9b7c6",
    "fontStyle": "italic"
  },
  ".cm-variable": {
    "color": "#a9b7c6"
  },
  ".cm-variable-2": {
    "color": "#a9b7c6"
  },
  ".cm-variable-3": {
    "color": "#9876aa"
  },
  ".cm-type": {
    "color": "#abc",
    "fontWeight": "bold"
  },
  ".cm-property": {
    "color": "#ffc66d"
  },
  ".cm-operator": {
    "color": "#a9b7c6"
  },
  ".cm-string": {
    "color": "#6a8759"
  },
  ".cm-string-2": {
    "color": "#6a8759"
  },
  ".cm-comment": {
    "color": "#61a151",
    "fontStyle": "italic"
  },
  ".cm-link": {
    "color": "#cc7832"
  },
  ".cm-atom": {
    "color": "#cc7832"
  },
  ".cm-error": {
    "color": "#bc3f3c"
  },
  ".cm-tag": {
    "color": "#629755",
    "fontWeight": "bold",
    "fontStyle": "italic",
    "textDecoration": "underline"
  },
  ".cm-attribute": {
    "color": "#6897bb"
  },
  ".cm-qualifier": {
    "color": "#6a8759"
  },
  ".cm-bracket": {
    "color": "#a9b7c6"
  },
  ".cm-builtin": {
    "color": "#ff9e59"
  },
  ".cm-special": {
    "color": "#ff9e59"
  },
  ".cm-matchhighlight": {
    "color": "#fff",
    "backgroundColor": "rgb(50 89 48 / 70%)",
    "fontWeight": "normal"
  },
  ".cm-searching": {
    "color": "#fff",
    "backgroundColor": "rgb(61 115 59 / 70%)",
    "fontWeight": "normal"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #a9b7c6"
  },
  ".cm-activeLine": {
    "background": "#323232"
  },
  ".cm-gutters": {
    "background": "#313335",
    "borderRight": "1px solid #313335"
  },
  ".cm-gutterElement span": {
    "color": "#ffee80"
  },
  ".CodeMirrir-linenumber": {
    "color": "#606366"
  },
  ".cm-matchingbracket": {
    "backgroundColor": "#3b514d",
    "color": "#ffef28",
    "fontWeight": "bold"
  },
  ".cm-selectionBackground,\n&.cm-focused .cm-selectionBackground": {
    "background": "#214283"
  },
  ".cm-hints.darcula": {
    "fontFamily": "Menlo, Monaco, Consolas, \"Courier New\", monospace",
    "color": "#9c9e9e",
    "backgroundColor": "#3b3e3f"
  },
  ".cm-hints.darcula .cm-hint-active": {
    "backgroundColor": "#494d4e",
    "color": "#9c9e9e"
  }
}, { dark: true }),
  "dracula": EditorView.theme({
  "&,\n.cm-gutters": {
    "backgroundColor": "#282a36",
    "color": "#f8f8f2",
    "border": "none"
  },
  ".cm-gutters": {
    "color": "#282a36"
  },
  ".cm-cursor": {
    "borderLeft": "solid thin #f8f8f0"
  },
  ".cm-linenumber": {
    "color": "#6d8a88"
  },
  ".cm-selectionBackground": {
    "background": "rgb(255 255 255 / 10%)"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(255 255 255 / 10%)"
  },
  ".cm-comment": {
    "color": "#6272a4"
  },
  ".cm-string,\n.cm-string-2": {
    "color": "#f1fa8c"
  },
  ".cm-number": {
    "color": "#bd93f9"
  },
  ".cm-variable": {
    "color": "#50fa7b"
  },
  ".cm-variable-2": {
    "color": "white"
  },
  ".cm-def": {
    "color": "#50fa7b"
  },
  ".cm-operator": {
    "color": "#ff79c6"
  },
  ".cm-keyword": {
    "color": "#ff79c6"
  },
  ".cm-atom": {
    "color": "#bd93f9"
  },
  ".cm-meta": {
    "color": "#f8f8f2"
  },
  ".cm-tag": {
    "color": "#ff79c6"
  },
  ".cm-attribute": {
    "color": "#50fa7b"
  },
  ".cm-qualifier": {
    "color": "#50fa7b"
  },
  ".cm-property": {
    "color": "#66d9ef"
  },
  ".cm-builtin": {
    "color": "#50fa7b"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#ffb86c"
  },
  ".cm-activeLine": {
    "background": "rgb(255 255 255 / 10%)"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "duotone-dark": EditorView.theme({
  "&": {
    "background": "#2a2734",
    "color": "#6c6783"
  },
  ".cm-selectionBackground ,&.cm-focused .cm-selectionBackground": {
    "background": "#545167"
  },
  ".cm-gutters": {
    "background": "#2a2734",
    "borderRight": "0"
  },
  ".cm-linenumber": {
    "color": "#545167"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #ffad5c",
    "borderRight": "0.5em solid #ffad5c",
    "opacity": "0.5"
  },
  ".cm-activeLine": {
    "background": "#363342",
    "opacity": "0.5"
  },
  ".cm-fat-cursor .cm-cursor": {
    "background": "#ffad5c",
    "opacity": "0.5"
  },
  ".cm-atom,\n.cm-number,\n.cm-keyword,\n.cm-variable,\n.cm-attribute,\n.cm-quote,\n.cm-hr,\n.cm-link": {
    "color": "#fc9"
  },
  ".cm-property": {
    "color": "#9a86fd"
  },
  ".cm-punctuation,\n.cm-unit,\n.cm-negative": {
    "color": "#e09142"
  },
  ".cm-string": {
    "color": "#ffb870"
  },
  ".cm-operator": {
    "color": "#ffad5c"
  },
  ".cm-positive": {
    "color": "#6a51e6"
  },
  ".cm-variable-2,\n.cm-variable-3,\n.cm-type,\n.cm-string-2,\n.cm-url": {
    "color": "#7a63ee"
  },
  ".cm-def,\n.cm-tag,\n.cm-builtin,\n.cm-qualifier,\n.cm-header,\n.cm-em": {
    "color": "#eeebff"
  },
  ".cm-bracket,\n.cm-comment": {
    "color": "#a7a5b2"
  },
  ".cm-error,\n.cm-invalidchar": {
    "color": "#f00"
  },
  ".cm-header": {
    "fontWeight": "normal"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "#eeebff"
  }
}, { dark: true }),
  "duotone-light": EditorView.theme({
  "&": {
    "background": "#faf8f5",
    "color": "#b29762"
  },
  ".cm-selectionBackground&.cm-focused .cm-selectionBackground": {
    "background": "#e3dcce"
  },
  ".cm-gutters": {
    "background": "#faf8f5",
    "borderRight": "0"
  },
  ".cm-linenumber": {
    "color": "#cdc4b1"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #93abdc",
    "borderRight": "0.5em solid #93abdc",
    "opacity": "0.5"
  },
  ".cm-activeLine": {
    "background": "#e3dcce",
    "opacity": "0.5"
  },
  ".cm-fat-cursor .cm-cursor": {
    "background": "#93abdc",
    "opacity": "0.5"
  },
  ".cm-atom,\n.cm-number,\n.cm-keyword,\n.cm-variable,\n.cm-attribute,\n.cm-quote,\n.cm-hr,\n.cm-link": {
    "color": "#063289"
  },
  ".cm-property": {
    "color": "#b29762"
  },
  ".cm-punctuation,\n.cm-unit,\n.cm-negative": {
    "color": "#063289"
  },
  ".cm-string,\n.cm-operator": {
    "color": "#1659df"
  },
  ".cm-positive": {
    "color": "#896724"
  },
  ".cm-variable-2,\n.cm-variable-3,\n.cm-type,\n.cm-string-2,\n.cm-url": {
    "color": "#896724"
  },
  ".cm-def,\n.cm-tag,\n.cm-builtin,\n.cm-qualifier,\n.cm-header,\n.cm-em": {
    "color": "#2d2006"
  },
  ".cm-bracket,\n.cm-comment": {
    "color": "#6f6e6a"
  },
  ".cm-error,\n.cm-invalidchar": {
    "color": "#f00"
  },
  ".cm-header": {
    "fontWeight": "normal"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "#faf8f5"
  }
}, { dark: false }),
  "eclipse": EditorView.theme({
  ".cm-meta": {
    "color": "#ff1717"
  },
  ".cm-keyword": {
    "lineHeight": "1em",
    "fontWeight": "bold",
    "color": "#7f0055"
  },
  ".cm-atom": {
    "color": "#219"
  },
  ".cm-number": {
    "color": "#164"
  },
  ".cm-def": {
    "color": "#00f"
  },
  ".cm-variable": {
    "color": "black"
  },
  ".cm-variable-2": {
    "color": "#0000c0"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#0000c0"
  },
  ".cm-property": {
    "color": "black"
  },
  ".cm-operator": {
    "color": "black"
  },
  ".cm-comment": {
    "color": "#3f7f5f"
  },
  ".cm-string": {
    "color": "#2a00ff"
  },
  ".cm-string-2": {
    "color": "#f50"
  },
  ".cm-qualifier": {
    "color": "#555"
  },
  ".cm-builtin": {
    "color": "#30a"
  },
  ".cm-bracket": {
    "color": "#cc7"
  },
  ".cm-tag": {
    "color": "#170"
  },
  ".cm-attribute": {
    "color": "#00c"
  },
  ".cm-link": {
    "color": "#219"
  },
  ".cm-error": {
    "color": "#f00"
  },
  ".cm-activeLine": {
    "background": "#e8f2ff"
  },
  ".cm-matchingbracket": {
    "outline": "1px solid grey",
    "color": "black"
  }
}, { dark: false }),
  "elegant": EditorView.theme({
  ".cm-number,\n.cm-string,\n.cm-atom": {
    "color": "#762"
  },
  ".cm-comment": {
    "color": "#262",
    "fontStyle": "italic",
    "lineHeight": "1em"
  },
  ".cm-meta": {
    "color": "#555",
    "fontStyle": "italic",
    "lineHeight": "1em"
  },
  ".cm-variable": {
    "color": "black"
  },
  ".cm-variable-2": {
    "color": "#b11"
  },
  ".cm-qualifier": {
    "color": "#555"
  },
  ".cm-keyword": {
    "color": "#730"
  },
  ".cm-builtin": {
    "color": "#30a"
  },
  ".cm-link": {
    "color": "#762"
  },
  ".cm-error": {
    "backgroundColor": "#fdd"
  },
  ".cm-activeLine": {
    "background": "#e8f2ff"
  },
  ".cm-matchingbracket": {
    "outline": "1px solid grey",
    "color": "black"
  }
}, { dark: false }),
  "erlang-dark": EditorView.theme({
  "&": {
    "background": "#002240",
    "color": "white"
  },
  ".cm-selectionBackground": {
    "background": "#b36539"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(179 101 57 / 99%)"
  },
  ".cm-gutters": {
    "background": "#002240",
    "borderRight": "1px solid #aaa"
  },
  ".cm-gutterElement span": {
    "color": "white"
  },
  ".cm-linenumber": {
    "color": "#d0d0d0"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid white"
  },
  ".cm-quote": {
    "color": "#ccc"
  },
  ".cm-atom": {
    "color": "#f133f1"
  },
  ".cm-attribute": {
    "color": "#ff80e1"
  },
  ".cm-bracket": {
    "color": "#ff9d00"
  },
  ".cm-builtin": {
    "color": "#eaa"
  },
  ".cm-comment": {
    "color": "#77f"
  },
  ".cm-def": {
    "color": "#e7a"
  },
  ".cm-keyword": {
    "color": "#ffee80"
  },
  ".cm-meta": {
    "color": "#50fefe"
  },
  ".cm-number": {
    "color": "#ffd0d0"
  },
  ".cm-operator": {
    "color": "#d55"
  },
  ".cm-property": {
    "color": "#ccc"
  },
  ".cm-qualifier": {
    "color": "#ccc"
  },
  ".cm-special": {
    "color": "#fbb"
  },
  ".cm-string": {
    "color": "#3ad900"
  },
  ".cm-string-2": {
    "color": "#ccc"
  },
  ".cm-tag": {
    "color": "#9effff"
  },
  ".cm-variable": {
    "color": "#50fe50"
  },
  ".cm-variable-2": {
    "color": "#e0e"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#ccc"
  },
  ".cm-error": {
    "color": "#9d1e15"
  },
  ".cm-activeLine": {
    "background": "#013461"
  },
  ".cm-matchingbracket": {
    "outline": "1px solid grey",
    "color": "white"
  }
}, { dark: true }),
  "gruvbox-dark": EditorView.theme({
  "&,\n.cm-gutters": {
    "backgroundColor": "#282828",
    "color": "#bdae93"
  },
  ".cm-gutters": {
    "background": "#282828",
    "borderRight": "0"
  },
  ".cm-linenumber": {
    "color": "#7c6f64"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #ebdbb2"
  },
  ".cm-fat-cursor .cm-cursor": {
    "backgroundColor": "#8e8d8875"
  },
  ".cm-animate-fat-cursor": {
    "backgroundColor": "#8e8d8875"
  },
  ".cm-selectionBackground ,&.cm-focused .cm-selectionBackground": {
    "background": "#928374"
  },
  ".cm-meta": {
    "color": "#83a598"
  },
  ".cm-comment": {
    "color": "#928374"
  },
  ".cm-number,\n.cm-atom": {
    "color": "#d3869b"
  },
  ".cm-keyword": {
    "color": "#f84934"
  },
  ".cm-variable": {
    "color": "#ebdbb2"
  },
  ".cm-variable-2": {
    "color": "#ebdbb2"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#fabd2f"
  },
  ".cm-operator": {
    "color": "#ebdbb2"
  },
  ".cm-callee": {
    "color": "#ebdbb2"
  },
  ".cm-def": {
    "color": "#ebdbb2"
  },
  ".cm-property": {
    "color": "#ebdbb2"
  },
  ".cm-string": {
    "color": "#b8bb26"
  },
  ".cm-string-2": {
    "color": "#8ec07c"
  },
  ".cm-qualifier": {
    "color": "#8ec07c"
  },
  ".cm-attribute": {
    "color": "#8ec07c"
  },
  ".cm-activeLine": {
    "background": "#3c3836"
  },
  ".cm-matchingbracket": {
    "background": "#928374",
    "color": "#282828"
  },
  ".cm-builtin": {
    "color": "#fe8019"
  },
  ".cm-tag": {
    "color": "#fe8019"
  }
}, { dark: true }),
  "hopscotch": EditorView.theme({
  "&": {
    "background": "#322931",
    "color": "#d5d3d5"
  },
  ".cm-selectionBackground, &.cm-focused .cm-selectionBackground": {
    "background": "#433b42"
  },
  ".cm-gutters": {
    "background": "#322931",
    "borderRight": "0"
  },
  ".cm-linenumber": {
    "color": "#797379"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #989498"
  },
  ".cm-comment": {
    "color": "#b33508"
  },
  ".cm-atom": {
    "color": "#c85e7c"
  },
  ".cm-number": {
    "color": "#c85e7c"
  },
  ".cm-property,\n.cm-attribute": {
    "color": "#8fc13e"
  },
  ".cm-keyword": {
    "color": "#dd464c"
  },
  ".cm-string": {
    "color": "#fdcc59"
  },
  ".cm-variable": {
    "color": "#8fc13e"
  },
  ".cm-variable-2": {
    "color": "#1290bf"
  },
  ".cm-def": {
    "color": "#fd8b19"
  },
  ".cm-error": {
    "background": "#dd464c",
    "color": "#989498"
  },
  ".cm-bracket": {
    "color": "#d5d3d5"
  },
  ".cm-tag": {
    "color": "#dd464c"
  },
  ".cm-link": {
    "color": "#c85e7c"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  },
  ".cm-activeLine": {
    "background": "#302020"
  }
}, { dark: true }),
  "icecoder": EditorView.theme({
  "&": {
    "color": "#666",
    "background": "#1d1d1b"
  },
  ".cm-keyword": {
    "color": "#eee",
    "fontWeight": "bold"
  },
  ".cm-atom": {
    "color": "#e1c76e"
  },
  ".cm-number": {
    "color": "#6cb5d9"
  },
  ".cm-def": {
    "color": "#b9ca4a"
  },
  ".cm-variable": {
    "color": "#6cb5d9"
  },
  ".cm-variable-2": {
    "color": "#cc1e5c"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#f9602c"
  },
  ".cm-property": {
    "color": "#eee"
  },
  ".cm-operator": {
    "color": "#9179bb"
  },
  ".cm-comment": {
    "color": "#97a3aa"
  },
  ".cm-string": {
    "color": "#b9ca4a"
  },
  ".cm-string-2": {
    "color": "#6cb5d9"
  },
  ".cm-meta": {
    "color": "#555"
  },
  ".cm-qualifier": {
    "color": "#555"
  },
  ".cm-builtin": {
    "color": "#214e7b"
  },
  ".cm-bracket": {
    "color": "#cc7"
  },
  ".cm-tag": {
    "color": "#e8e8e8"
  },
  ".cm-attribute": {
    "color": "#099"
  },
  ".cm-header": {
    "color": "#6a0d6a"
  },
  ".cm-quote": {
    "color": "#186718"
  },
  ".cm-hr": {
    "color": "#888"
  },
  ".cm-link": {
    "color": "#e1c76e"
  },
  ".cm-error": {
    "color": "#d00"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid white"
  },
  ".cm-selectionBackground, &.cm-focused .cm-selectionBackground": {
    "color": "#fff",
    "background": "#037"
  },
  ".cm-gutters": {
    "background": "#1d1d1b",
    "minWidth": "41px",
    "borderRight": "0"
  },
  ".cm-linenumber": {
    "color": "#555",
    "cursor": "default"
  },
  ".cm-matchingbracket": {
    "color": "#fff",
    "background": "#555"
  },
  ".cm-activeLine": {
    "background": "#000"
  }
}, { dark: true }),
  "idea": EditorView.theme({
  "&": {
    "fontFamily": "Consolas, Menlo, Monaco, \"Lucida Console\", \"Liberation Mono\",\n        \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Courier New\",\n        monospace, serif"
  },
  ".cm-meta": {
    "color": "#808000"
  },
  ".cm-number": {
    "color": "#00f"
  },
  ".cm-keyword": {
    "lineHeight": "1em",
    "fontWeight": "bold",
    "color": "#000080"
  },
  ".cm-atom": {
    "fontWeight": "bold",
    "color": "#000080"
  },
  ".cm-def": {
    "color": "#000"
  },
  ".cm-variable": {
    "color": "black"
  },
  ".cm-variable-2": {
    "color": "black"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "black"
  },
  ".cm-property": {
    "color": "black"
  },
  ".cm-operator": {
    "color": "black"
  },
  ".cm-comment": {
    "color": "#808080"
  },
  ".cm-string": {
    "color": "#008000"
  },
  ".cm-string-2": {
    "color": "#008000"
  },
  ".cm-qualifier": {
    "color": "#555"
  },
  ".cm-error": {
    "color": "#f00"
  },
  ".cm-attribute": {
    "color": "#00f"
  },
  ".cm-tag": {
    "color": "#000080"
  },
  ".cm-link": {
    "color": "#00f"
  },
  ".cm-activeLine": {
    "background": "#fffae3"
  },
  ".cm-builtin": {
    "color": "#30a"
  },
  ".cm-bracket": {
    "color": "#cc7"
  },
  ".cm-matchingbracket": {
    "outline": "1px solid grey",
    "color": "black"
  },
  ".cm-hints.idea": {
    "fontFamily": "Menlo, Monaco, Consolas, \"Courier New\", monospace",
    "color": "#616569",
    "backgroundColor": "#ebf3fd"
  },
  ".cm-hints.idea .cm-hint-active": {
    "backgroundColor": "#a2b8c9",
    "color": "#5c6065"
  }
}, { dark: false }),
  "isotope": EditorView.theme({
  "&": {
    "background": "#000",
    "color": "#e0e0e0"
  },
  ".cm-selectionBackground, &.cm-focused .cm-selectionBackground": {
    "background": "#404040"
  },
  ".cm-gutters": {
    "background": "#000",
    "borderRight": "0"
  },
  ".cm-linenumber": {
    "color": "#808080"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #c0c0c0"
  },
  ".cm-comment": {
    "color": "#30f"
  },
  ".cm-atom": {
    "color": "#c0f"
  },
  ".cm-number": {
    "color": "#c0f"
  },
  ".cm-property,\n.cm-attribute": {
    "color": "#3f0"
  },
  ".cm-keyword": {
    "color": "#f00"
  },
  ".cm-string": {
    "color": "#f09"
  },
  ".cm-variable": {
    "color": "#3f0"
  },
  ".cm-variable-2": {
    "color": "#06f"
  },
  ".cm-def": {
    "color": "#f90"
  },
  ".cm-error": {
    "background": "#f00",
    "color": "#c0c0c0"
  },
  ".cm-bracket": {
    "color": "#e0e0e0"
  },
  ".cm-tag": {
    "color": "#f00"
  },
  ".cm-link": {
    "color": "#c0f"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  },
  ".cm-activeLine": {
    "background": "#202020"
  }
}, { dark: true }),
  "juejin": EditorView.theme({
  "&": {
    "background": "#f8f9fa"
  },
  ".cm-header,\n.cm-def": {
    "color": "#1ba2f0"
  },
  ".cm-comment": {
    "color": "#009e9d"
  },
  ".cm-quote,\n.cm-link,\n.cm-strong,\n.cm-attribute": {
    "color": "#fd7741"
  },
  ".cm-url,\n.cm-keyword,\n.cm-builtin": {
    "color": "#bb51b8"
  },
  ".cm-hr": {
    "color": "#909090"
  },
  ".cm-tag": {
    "color": "#107000"
  },
  ".cm-variable-2": {
    "color": "#0050a0"
  }
}, { dark: false }),
  "lesser-dark": EditorView.theme({
  "&": {
    "background": "#262626",
    "color": "#ebefe7",
    "textShadow": "0 -1px 1px #262626"
  },
  ".cm-selectionBackground": {
    "background": "#45443b"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(69 68 59 / 99%)"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid white"
  },
  "pre": {
    "padding": "0 8px"
  },
  "& .cm-matchingbracket": {
    "color": "#7efc7e"
  },
  ".cm-gutters": {
    "background": "#262626",
    "borderRight": "1px solid #aaa"
  },
  ".cm-gutterElement span": {
    "color": "#599eff"
  },
  ".cm-linenumber": {
    "color": "#777"
  },
  ".cm-header": {
    "color": "#a0a"
  },
  ".cm-quote": {
    "color": "#090"
  },
  ".cm-keyword": {
    "color": "#599eff"
  },
  ".cm-atom": {
    "color": "#c2b470"
  },
  ".cm-number": {
    "color": "#b35e4d"
  },
  ".cm-def": {
    "color": "white"
  },
  ".cm-variable": {
    "color": "#d9bf8c"
  },
  ".cm-variable-2": {
    "color": "#669199"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "white"
  },
  ".cm-property": {
    "color": "#92a75c"
  },
  ".cm-operator": {
    "color": "#92a75c"
  },
  ".cm-comment": {
    "color": "#666"
  },
  ".cm-string": {
    "color": "#bcd279"
  },
  ".cm-string-2": {
    "color": "#f50"
  },
  ".cm-meta": {
    "color": "#738c73"
  },
  ".cm-qualifier": {
    "color": "#555"
  },
  ".cm-builtin": {
    "color": "#ff9e59"
  },
  ".cm-bracket": {
    "color": "#ebefe7"
  },
  ".cm-tag": {
    "color": "#669199"
  },
  ".cm-attribute": {
    "color": "#81a4d5"
  },
  ".cm-hr": {
    "color": "#999"
  },
  ".cm-link": {
    "color": "#7070e6"
  },
  ".cm-error": {
    "color": "#9d1e15"
  },
  ".cm-activeLine": {
    "background": "#3c3a3a"
  },
  ".cm-matchingbracket": {
    "outline": "1px solid grey",
    "color": "white"
  }
}, { dark: true }),
  "liquibyte": EditorView.theme({
  "&": {
    "backgroundColor": "#000",
    "color": "#fff",
    "lineHeight": "1.2em",
    "fontSize": "1em"
  },
  "&.cm-focused .cm-matchhighlight": {
    "textDecoration": "underline",
    "textDecorationColor": "#0f0",
    "textDecorationStyle": "wavy"
  },
  ".cm-trailingspace": {
    "textDecoration": "line-through",
    "textDecorationColor": "#f00",
    "textDecorationStyle": "dotted"
  },
  ".cm-tab": {
    "textDecoration": "line-through",
    "textDecorationColor": "#404040",
    "textDecorationStyle": "dotted"
  },
  ".cm-gutters": {
    "backgroundColor": "#262626",
    "borderRight": "1px solid #505050",
    "paddingRight": "0.8em"
  },
  ".cm-gutter-elt div": {
    "fontSize": "1.2em"
  },
  ".cm-gutterElement span": {},
  ".cm-linenumber": {
    "color": "#606060",
    "paddingLeft": "0"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #eee"
  },
  ".cm-comment": {
    "color": "#008000"
  },
  ".cm-def": {
    "color": "#ffaf40",
    "fontWeight": "bold"
  },
  ".cm-keyword": {
    "color": "#c080ff",
    "fontWeight": "bold"
  },
  ".cm-builtin": {
    "color": "#ffaf40",
    "fontWeight": "bold"
  },
  ".cm-variable": {
    "color": "#5967ff",
    "fontWeight": "bold"
  },
  ".cm-string": {
    "color": "#ff8000"
  },
  ".cm-number": {
    "color": "#0f0",
    "fontWeight": "bold"
  },
  ".cm-atom": {
    "color": "#bf3030",
    "fontWeight": "bold"
  },
  ".cm-variable-2": {
    "color": "#007f7f",
    "fontWeight": "bold"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#c080ff",
    "fontWeight": "bold"
  },
  ".cm-property": {
    "color": "#999",
    "fontWeight": "bold"
  },
  ".cm-operator": {
    "color": "#fff"
  },
  ".cm-meta": {
    "color": "#0f0"
  },
  ".cm-qualifier": {
    "color": "#fff700",
    "fontWeight": "bold"
  },
  ".cm-bracket": {
    "color": "#cc7"
  },
  ".cm-tag": {
    "color": "#ff0",
    "fontWeight": "bold"
  },
  ".cm-attribute": {
    "color": "#c080ff",
    "fontWeight": "bold"
  },
  ".cm-error": {
    "color": "#f00"
  },
  ".cm-selectionBackground, &.cm-focused .cm-selectionBackground": {
    "backgroundColor": "rgb(255 0 0 / 25%)"
  },
  ".cm-compilation": {
    "backgroundColor": "rgb(255 255 255 / 12%)"
  },
  ".cm-activeLine": {
    "backgroundColor": "rgb(0 255 0 / 15%)"
  },
  "& .cm-matchingbracket": {
    "color": "#0f0",
    "fontWeight": "bold"
  },
  "& .cm-nonmatchingbracket": {
    "color": "#f00",
    "fontWeight": "bold"
  },
  ".cm-matchingtag": {
    "backgroundColor": "rgb(150 255 0 / 30%)"
  },
  "div.cm-simplescroll-horizontal div:hover,\ndiv.cm-simplescroll-vertical div:hover": {
    "backgroundColor": "rgb(80 80 80 / 70%)"
  },
  "div.cm-simplescroll-horizontal div,\ndiv.cm-simplescroll-vertical div": {
    "backgroundColor": "rgb(80 80 80 / 30%)",
    "border": "1px solid #404040",
    "borderRadius": "5px"
  },
  "div.cm-simplescroll-vertical div": {
    "borderTop": "1px solid #404040",
    "borderBottom": "1px solid #404040"
  },
  "div.cm-simplescroll-horizontal div": {
    "borderLeft": "1px solid #404040",
    "borderRight": "1px solid #404040"
  },
  "div.cm-simplescroll-vertical": {
    "backgroundColor": "#262626"
  },
  "div.cm-simplescroll-horizontal": {
    "backgroundColor": "#262626",
    "borderTop": "1px solid #404040"
  },
  "div.cm-overlayscroll-horizontal div,\ndiv.cm-overlayscroll-vertical div": {
    "backgroundColor": "#404040",
    "borderRadius": "5px"
  },
  "div.cm-overlayscroll-vertical div": {
    "border": "1px solid #404040"
  },
  "div.cm-overlayscroll-horizontal div": {
    "border": "1px solid #404040"
  }
}, { dark: true }),
  "lucario": EditorView.theme({
  "&,\n.cm-gutters": {
    "backgroundColor": "#2b3e50",
    "color": "#f8f8f2",
    "border": "none"
  },
  ".cm-gutters": {
    "color": "#2b3e50"
  },
  ".cm-cursor": {
    "borderLeft": "solid thin #e6c845"
  },
  ".cm-linenumber": {
    "color": "#f8f8f2"
  },
  ".cm-selectionBackground": {
    "background": "#243443"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "#243443"
  },
  ".cm-comment": {
    "color": "#5c98cd"
  },
  ".cm-string,\n.cm-string-2": {
    "color": "#e6db74"
  },
  ".cm-number": {
    "color": "#ca94ff"
  },
  ".cm-variable": {
    "color": "#f8f8f2"
  },
  ".cm-variable-2": {
    "color": "#f8f8f2"
  },
  ".cm-def": {
    "color": "#72c05d"
  },
  ".cm-operator": {
    "color": "#66d9ef"
  },
  ".cm-keyword": {
    "color": "#ff6541"
  },
  ".cm-atom": {
    "color": "#bd93f9"
  },
  ".cm-meta": {
    "color": "#f8f8f2"
  },
  ".cm-tag": {
    "color": "#ff6541"
  },
  ".cm-attribute": {
    "color": "#66d9ef"
  },
  ".cm-qualifier": {
    "color": "#72c05d"
  },
  ".cm-property": {
    "color": "#f8f8f2"
  },
  ".cm-builtin": {
    "color": "#72c05d"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#ffb86c"
  },
  ".cm-activeLine": {
    "background": "#243443"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "material-darker": EditorView.theme({
  "&": {
    "backgroundColor": "#212121",
    "color": "#eff"
  },
  ".cm-gutters": {
    "background": "#212121",
    "color": "#545454",
    "border": "none"
  },
  ".cm-gutterElement span,\n.cm-linenumber": {
    "color": "#545454"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #fc0"
  },
  ".cm-selectionBackground": {
    "background": "rgb(97 97 97 / 20%)"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(128 203 196 / 20%)"
  },
  ".cm-activeLine": {
    "background": "rgb(0 0 0 / 50%)"
  },
  ".cm-keyword": {
    "color": "#c792ea"
  },
  ".cm-operator": {
    "color": "#89ddff"
  },
  ".cm-variable-2": {
    "color": "#eff"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#decb6b"
  },
  ".cm-builtin": {
    "color": "#ffcb6b"
  },
  ".cm-atom": {
    "color": "#f78c6c"
  },
  ".cm-number": {
    "color": "#ff5370"
  },
  ".cm-def": {
    "color": "#82aaff"
  },
  ".cm-string": {
    "color": "#c3e88d"
  },
  ".cm-string-2": {
    "color": "#f07178"
  },
  ".cm-comment": {
    "color": "#545454"
  },
  ".cm-variable": {
    "color": "#f07178"
  },
  ".cm-tag": {
    "color": "#ff5370"
  },
  ".cm-meta": {
    "color": "#ffcb6b"
  },
  ".cm-attribute": {
    "color": "#c792ea"
  },
  ".cm-property": {
    "color": "#c792ea"
  },
  ".cm-qualifier": {
    "color": "#decb6b"
  },
  ".cm-error": {
    "color": "rgb(255 255 255 / 100%)",
    "backgroundColor": "#ff5370"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "material-ocean": EditorView.theme({
  "&": {
    "backgroundColor": "#0f111a",
    "color": "#8f93a2"
  },
  ".cm-gutters": {
    "background": "#0f111a",
    "color": "#464b5d",
    "border": "none"
  },
  ".cm-gutterElement span,\n.cm-linenumber": {
    "color": "#464b5d"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #fc0"
  },
  ".cm-fat-cursor .cm-cursor": {
    "backgroundColor": "#a2a8a175"
  },
  ".cm-animate-fat-cursor": {
    "backgroundColor": "#a2a8a175"
  },
  ".cm-selectionBackground": {
    "background": "rgb(113 124 180 / 20%)"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(128 203 196 / 20%)"
  },
  ".cm-activeLine": {
    "background": "rgb(0 0 0 / 50%)"
  },
  ".cm-keyword": {
    "color": "#c792ea"
  },
  ".cm-operator": {
    "color": "#89ddff"
  },
  ".cm-variable-2": {
    "color": "#eff"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#decb6b"
  },
  ".cm-builtin": {
    "color": "#ffcb6b"
  },
  ".cm-atom": {
    "color": "#f78c6c"
  },
  ".cm-number": {
    "color": "#ff5370"
  },
  ".cm-def": {
    "color": "#82aaff"
  },
  ".cm-string": {
    "color": "#c3e88d"
  },
  ".cm-string-2": {
    "color": "#f07178"
  },
  ".cm-comment": {
    "color": "#464b5d"
  },
  ".cm-variable": {
    "color": "#f07178"
  },
  ".cm-tag": {
    "color": "#ff5370"
  },
  ".cm-meta": {
    "color": "#ffcb6b"
  },
  ".cm-attribute": {
    "color": "#c792ea"
  },
  ".cm-property": {
    "color": "#c792ea"
  },
  ".cm-qualifier": {
    "color": "#decb6b"
  },
  ".cm-error": {
    "color": "rgb(255 255 255 / 100%)",
    "backgroundColor": "#ff5370"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "material-palenight": EditorView.theme({
  "&": {
    "backgroundColor": "#292d3e",
    "color": "#a6accd"
  },
  ".cm-gutters": {
    "background": "#292d3e",
    "color": "#676e95",
    "border": "none"
  },
  ".cm-gutterElement span,\n.cm-linenumber": {
    "color": "#676e95"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #fc0"
  },
  ".cm-fat-cursor .cm-cursor": {
    "backgroundColor": "#607c8b80"
  },
  ".cm-animate-fat-cursor": {
    "backgroundColor": "#607c8b80"
  },
  ".cm-selectionBackground": {
    "background": "rgb(113 124 180 / 20%)"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(128 203 196 / 20%)"
  },
  ".cm-activeLine": {
    "background": "rgb(0 0 0 / 50%)"
  },
  ".cm-keyword": {
    "color": "#c792ea"
  },
  ".cm-operator": {
    "color": "#89ddff"
  },
  ".cm-variable-2": {
    "color": "#eff"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#decb6b"
  },
  ".cm-builtin": {
    "color": "#ffcb6b"
  },
  ".cm-atom": {
    "color": "#f78c6c"
  },
  ".cm-number": {
    "color": "#ff5370"
  },
  ".cm-def": {
    "color": "#82aaff"
  },
  ".cm-string": {
    "color": "#c3e88d"
  },
  ".cm-string-2": {
    "color": "#f07178"
  },
  ".cm-comment": {
    "color": "#676e95"
  },
  ".cm-variable": {
    "color": "#f07178"
  },
  ".cm-tag": {
    "color": "#ff5370"
  },
  ".cm-meta": {
    "color": "#ffcb6b"
  },
  ".cm-attribute": {
    "color": "#c792ea"
  },
  ".cm-property": {
    "color": "#c792ea"
  },
  ".cm-qualifier": {
    "color": "#decb6b"
  },
  ".cm-error": {
    "color": "rgb(255 255 255 / 100%)",
    "backgroundColor": "#ff5370"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "material": EditorView.theme({
  "&": {
    "backgroundColor": "#263238",
    "color": "#eff"
  },
  ".cm-gutters": {
    "background": "#263238",
    "color": "#546e7a",
    "border": "none"
  },
  ".cm-gutterElement span,\n.cm-linenumber": {
    "color": "#546e7a"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #fc0"
  },
  ".cm-fat-cursor .cm-cursor": {
    "backgroundColor": "#5d6d5c80"
  },
  ".cm-animate-fat-cursor": {
    "backgroundColor": "#5d6d5c80"
  },
  ".cm-selectionBackground": {
    "background": "rgb(128 203 196 / 20%)"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(128 203 196 / 20%)"
  },
  ".cm-activeLine": {
    "background": "rgb(0 0 0 / 50%)"
  },
  ".cm-keyword": {
    "color": "#c792ea"
  },
  ".cm-operator": {
    "color": "#89ddff"
  },
  ".cm-variable-2": {
    "color": "#eff"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#decb6b"
  },
  ".cm-builtin": {
    "color": "#ffcb6b"
  },
  ".cm-atom": {
    "color": "#f78c6c"
  },
  ".cm-number": {
    "color": "#ff5370"
  },
  ".cm-def": {
    "color": "#82aaff"
  },
  ".cm-string": {
    "color": "#c3e88d"
  },
  ".cm-string-2": {
    "color": "#f07178"
  },
  ".cm-comment": {
    "color": "#546e7a"
  },
  ".cm-variable": {
    "color": "#f07178"
  },
  ".cm-tag": {
    "color": "#ff5370"
  },
  ".cm-meta": {
    "color": "#ffcb6b"
  },
  ".cm-attribute": {
    "color": "#c792ea"
  },
  ".cm-property": {
    "color": "#c792ea"
  },
  ".cm-qualifier": {
    "color": "#decb6b"
  },
  ".cm-error": {
    "color": "rgb(255 255 255 / 100%)",
    "backgroundColor": "#ff5370"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "mbo": EditorView.theme({
  "&": {
    "background": "#2c2c2c",
    "color": "#ffffec"
  },
  ".cm-selectionBackground": {
    "background": "#716c62"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(113 108 98 / 99%)"
  },
  ".cm-gutters": {
    "background": "#4e4e4e",
    "borderRight": "0"
  },
  ".cm-gutterElement span": {
    "color": "white"
  },
  ".cm-linenumber": {
    "color": "#dadada"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #ffffec"
  },
  ".cm-comment": {
    "color": "#95958a"
  },
  ".cm-atom": {
    "color": "#00a8c6"
  },
  ".cm-number": {
    "color": "#00a8c6"
  },
  ".cm-property,\n.cm-attribute": {
    "color": "#9ddfe9"
  },
  ".cm-keyword": {
    "color": "#ffb928"
  },
  ".cm-string": {
    "color": "#ffcf6c"
  },
  ".cm-string.cm-property": {
    "color": "#ffffec"
  },
  ".cm-variable": {
    "color": "#ffffec"
  },
  ".cm-variable-2": {
    "color": "#00a8c6"
  },
  ".cm-def": {
    "color": "#ffffec"
  },
  ".cm-bracket": {
    "color": "#fffffc",
    "fontWeight": "bold"
  },
  ".cm-tag": {
    "color": "#9ddfe9"
  },
  ".cm-link": {
    "color": "#f54b07"
  },
  ".cm-error": {
    "borderBottom": "#636363",
    "color": "#ffffec"
  },
  ".cm-qualifier": {
    "color": "#ffffec"
  },
  ".cm-activeLine": {
    "background": "#494b41"
  },
  ".cm-matchingbracket": {
    "color": "#ffb928"
  },
  ".cm-matchingtag": {
    "background": "rgb(255 255 255 / 37%)"
  }
}, { dark: true }),
  "mdn-like": EditorView.theme({
  "&": {
    "backgroundImage": "url(\"data:image/png;base64,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\")"
  },
  ".cm-selectionBackground": {
    "background": "#cfc"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "#cfc"
  },
  ".cm-gutters": {
    "background": "#f8f8f8",
    "borderLeft": "6px solid rgb(0 83 159 / 65%)",
    "color": "#333"
  },
  ".cm-linenumber": {
    "color": "#aaa",
    "paddingLeft": "8px"
  },
  ".cm-cursor": {
    "borderLeft": "2px solid #222"
  },
  ".cm-keyword": {
    "color": "#6262ff"
  },
  ".cm-atom": {
    "color": "#f90"
  },
  ".cm-number": {
    "color": "#ca7841"
  },
  ".cm-def": {
    "color": "#8da6ce"
  },
  ".cm-variable-2,\n.cm-tag": {
    "color": "#690"
  },
  ".cm-variable-3,\n.cm-def,\n.cm-type": {
    "color": "#07a"
  },
  ".cm-variable": {
    "color": "#07a"
  },
  ".cm-property": {
    "color": "#905"
  },
  ".cm-qualifier": {
    "color": "#690"
  },
  ".cm-operator": {
    "color": "#cda869"
  },
  ".cm-comment": {
    "color": "#777",
    "fontWeight": "normal"
  },
  ".cm-string": {
    "color": "#07a",
    "fontStyle": "italic"
  },
  ".cm-string-2": {
    "color": "#bd6b18"
  },
  ".cm-meta": {
    "color": "#000"
  },
  ".cm-builtin": {
    "color": "#9b7536"
  },
  ".cm-tag": {
    "color": "#997643"
  },
  ".cm-attribute": {
    "color": "#d6bb6d"
  },
  ".cm-header": {
    "color": "#ff6400"
  },
  ".cm-hr": {
    "color": "#aeaeae"
  },
  ".cm-link": {
    "color": "#ad9361",
    "fontStyle": "italic",
    "textDecoration": "none"
  },
  ".cm-error": {
    "borderBottom": "1px solid red"
  },
  "div .cm-activeLine": {
    "background": "#efefff"
  },
  "div .cm-matchingbracket": {
    "outline": "1px solid grey",
    "color": "inherit"
  }
}, { dark: false }),
  "midnight": EditorView.theme({
  ".cm-activeLine": {
    "background": "#253540"
  },
  "&": {
    "background": "#0f192a",
    "color": "#d1edff"
  },
  ".cm-selectionBackground": {
    "background": "#314d67"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(49 77 103 / 99%)"
  },
  ".cm-gutters": {
    "background": "#0f192a",
    "borderRight": "1px solid"
  },
  ".cm-gutterElement span": {
    "color": "white"
  },
  ".cm-linenumber": {
    "color": "#d0d0d0"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #f8f8f0"
  },
  ".cm-comment": {
    "color": "#428bdd"
  },
  ".cm-atom": {
    "color": "#ae81ff"
  },
  ".cm-number": {
    "color": "#d1edff"
  },
  ".cm-property,\n.cm-attribute": {
    "color": "#a6e22e"
  },
  ".cm-keyword": {
    "color": "#e83737"
  },
  ".cm-string": {
    "color": "#1dc116"
  },
  ".cm-variable": {
    "color": "#ffaa3e"
  },
  ".cm-variable-2": {
    "color": "#ffaa3e"
  },
  ".cm-def": {
    "color": "#4dd"
  },
  ".cm-bracket": {
    "color": "#d1edff"
  },
  ".cm-tag": {
    "color": "#449"
  },
  ".cm-link": {
    "color": "#ae81ff"
  },
  ".cm-error": {
    "background": "#f92672",
    "color": "#f8f8f0"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "monokai": EditorView.theme({
  "&": {
    "background": "#272822",
    "color": "#f8f8f2"
  },
  ".cm-selectionBackground": {
    "background": "#49483e"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(73 72 62 / 99%)"
  },
  ".cm-gutters": {
    "background": "#272822",
    "borderRight": "0"
  },
  ".cm-gutterElement span": {
    "color": "white"
  },
  ".cm-linenumber": {
    "color": "#d0d0d0"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #f8f8f0"
  },
  ".cm-comment": {
    "color": "#75715e"
  },
  ".cm-atom": {
    "color": "#ae81ff"
  },
  ".cm-number": {
    "color": "#ae81ff"
  },
  ".cm-comment.cm-attribute": {
    "color": "#97b757"
  },
  ".cm-comment.cm-def": {
    "color": "#bc9262"
  },
  ".cm-comment.cm-tag": {
    "color": "#bc6283"
  },
  ".cm-comment.cm-type": {
    "color": "#5998a6"
  },
  ".cm-property,\n.cm-attribute": {
    "color": "#a6e22e"
  },
  ".cm-keyword": {
    "color": "#f92672"
  },
  ".cm-builtin": {
    "color": "#66d9ef"
  },
  ".cm-string": {
    "color": "#e6db74"
  },
  ".cm-variable": {
    "color": "#f8f8f2"
  },
  ".cm-variable-2": {
    "color": "#9effff"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#66d9ef"
  },
  ".cm-def": {
    "color": "#fd971f"
  },
  ".cm-bracket": {
    "color": "#f8f8f2"
  },
  ".cm-tag": {
    "color": "#f92672"
  },
  ".cm-header": {
    "color": "#ae81ff"
  },
  ".cm-link": {
    "color": "#ae81ff"
  },
  ".cm-error": {
    "background": "#f92672",
    "color": "#f8f8f0"
  },
  ".cm-activeLine": {
    "background": "#373831"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "moxer": EditorView.theme({
  "&": {
    "backgroundColor": "#090a0f",
    "color": "#8e95b4",
    "lineHeight": "1.8"
  },
  ".cm-gutters": {
    "background": "#090a0f",
    "color": "#35394b",
    "border": "none"
  },
  ".cm-gutterElement span,\n.cm-linenumber": {
    "color": "#35394b"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #fc0"
  },
  ".cm-selectionBackground": {
    "background": "rgb(128 203 196 / 20%)"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "#212431"
  },
  ".cm-activeline-background,\n.cm-activeline-gutter .cm-linenumber": {
    "background": "rgb(33 36 49 / 50%)"
  },
  ".cm-keyword": {
    "color": "#d46c6c"
  },
  ".cm-operator": {
    "color": "#d46c6c"
  },
  ".cm-variable-2": {
    "color": "#81c5da"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#decb6b"
  },
  ".cm-builtin": {
    "color": "#ffcb6b"
  },
  ".cm-atom": {
    "color": "#a99be2"
  },
  ".cm-number": {
    "color": "#7ca4c0"
  },
  ".cm-def": {
    "color": "#f5dfa5"
  },
  ".cm-line .cm-def ~ .cm-def": {
    "color": "#81c5da"
  },
  ".cm-string": {
    "color": "#b2e4ae"
  },
  ".cm-string-2": {
    "color": "#f07178"
  },
  ".cm-comment": {
    "color": "#3f445a"
  },
  ".cm-variable": {
    "color": "#8e95b4"
  },
  ".cm-tag": {
    "color": "#ff5370"
  },
  ".cm-meta": {
    "color": "#ffcb6b"
  },
  ".cm-attribute": {
    "color": "#c792ea"
  },
  ".cm-property": {
    "color": "#81c5da"
  },
  ".cm-qualifier": {
    "color": "#decb6b"
  },
  ".cm-error": {
    "color": "rgb(255 255 255 / 100%)",
    "backgroundColor": "#ff5370"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "neat": EditorView.theme({
  ".cm-comment": {
    "color": "#a86"
  },
  ".cm-keyword": {
    "lineHeight": "1em",
    "fontWeight": "bold",
    "color": "blue"
  },
  ".cm-string": {
    "color": "#a22"
  },
  ".cm-builtin": {
    "lineHeight": "1em",
    "fontWeight": "bold",
    "color": "#077"
  },
  ".cm-special": {
    "lineHeight": "1em",
    "fontWeight": "bold",
    "color": "#0aa"
  },
  ".cm-variable": {
    "color": "black"
  },
  ".cm-number,\n.cm-atom": {
    "color": "#3a3"
  },
  ".cm-meta": {
    "color": "#555"
  },
  ".cm-link": {
    "color": "#3a3"
  },
  ".cm-activeLine": {
    "background": "#e8f2ff"
  },
  ".cm-matchingbracket": {
    "outline": "1px solid grey",
    "color": "black"
  }
}, { dark: false }),
  "neo": EditorView.theme({
  "&": {
    "backgroundColor": "#fff",
    "color": "#2e383c",
    "lineHeight": "1.4375"
  },
  ".cm-comment": {
    "color": "#75787b"
  },
  ".cm-keyword,\n.cm-property": {
    "color": "#1d75b3"
  },
  ".cm-atom,\n.cm-number": {
    "color": "#75438a"
  },
  ".cm-node,\n.cm-tag": {
    "color": "#9c3328"
  },
  ".cm-string": {
    "color": "#b35e14"
  },
  ".cm-variable,\n.cm-qualifier": {
    "color": "#047d65"
  },
  "pre": {
    "padding": "0"
  },
  ".cm-gutters": {
    "border": "none",
    "borderRight": "10px solid transparent",
    "backgroundColor": "transparent"
  },
  ".cm-linenumber": {
    "padding": "0",
    "color": "#e0e2e5"
  },
  ".cm-gutterElement span": {
    "color": "#1d75b3"
  },
  ".cm-cursor": {
    "width": "auto",
    "border": "0",
    "background": "rgb(155 157 162 / 37%)",
    "zIndex": "1"
  }
}, { dark: false }),
  "night": EditorView.theme({
  "&": {
    "background": "#0a001f",
    "color": "#f8f8f8"
  },
  ".cm-selectionBackground": {
    "background": "#447"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(68 68 119 / 99%)"
  },
  ".cm-gutters": {
    "background": "#0a001f",
    "borderRight": "1px solid #aaa"
  },
  ".cm-gutterElement span": {
    "color": "white"
  },
  ".cm-linenumber": {
    "color": "#f8f8f8"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid white"
  },
  ".cm-comment": {
    "color": "#8900d1"
  },
  ".cm-atom": {
    "color": "#845dc4"
  },
  ".cm-number,\n.cm-attribute": {
    "color": "#ffd500"
  },
  ".cm-keyword": {
    "color": "#599eff"
  },
  ".cm-string": {
    "color": "#37f14a"
  },
  ".cm-meta": {
    "color": "#7678e2"
  },
  ".cm-variable-2,\n.cm-tag": {
    "color": "#99b2ff"
  },
  ".cm-variable-3,\n.cm-def,\n.cm-type": {
    "color": "white"
  },
  ".cm-bracket": {
    "color": "#8da6ce"
  },
  ".cm-builtin,\n.cm-special": {
    "color": "#ff9e59"
  },
  ".cm-link": {
    "color": "#845dc4"
  },
  ".cm-error": {
    "color": "#9d1e15"
  },
  ".cm-activeLine": {
    "background": "#1c005a"
  },
  ".cm-matchingbracket": {
    "outline": "1px solid grey",
    "color": "white"
  }
}, { dark: true }),
  "nord": EditorView.theme({
  "&": {
    "background": "#2e3440",
    "color": "#d8dee9"
  },
  ".cm-selectionBackground": {
    "background": "#434c5e"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "#3b4252"
  },
  ".cm-gutters": {
    "background": "#2e3440",
    "borderRight": "0"
  },
  ".cm-gutterElement span": {
    "color": "#4c566a"
  },
  ".cm-linenumber": {
    "color": "#4c566a"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #f8f8f0"
  },
  ".cm-comment": {
    "color": "#4c566a"
  },
  ".cm-atom": {
    "color": "#b48ead"
  },
  ".cm-number": {
    "color": "#b48ead"
  },
  ".cm-comment.cm-attribute": {
    "color": "#97b757"
  },
  ".cm-comment.cm-def": {
    "color": "#bc9262"
  },
  ".cm-comment.cm-tag": {
    "color": "#bc6283"
  },
  ".cm-comment.cm-type": {
    "color": "#5998a6"
  },
  ".cm-property,\n.cm-attribute": {
    "color": "#8fbcbb"
  },
  ".cm-keyword": {
    "color": "#81a1c1"
  },
  ".cm-builtin": {
    "color": "#81a1c1"
  },
  ".cm-string": {
    "color": "#a3be8c"
  },
  ".cm-variable": {
    "color": "#d8dee9"
  },
  ".cm-variable-2": {
    "color": "#d8dee9"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#d8dee9"
  },
  ".cm-def": {
    "color": "#8fbcbb"
  },
  ".cm-bracket": {
    "color": "#81a1c1"
  },
  ".cm-tag": {
    "color": "#bf616a"
  },
  ".cm-header": {
    "color": "#b48ead"
  },
  ".cm-link": {
    "color": "#b48ead"
  },
  ".cm-error": {
    "background": "#bf616a",
    "color": "#f8f8f0"
  },
  ".cm-activeLine": {
    "background": "#3b4252"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "oceanic-next": EditorView.theme({
  "&": {
    "background": "#304148",
    "color": "#f8f8f2"
  },
  ".cm-selectionBackground": {
    "background": "rgb(101 115 126 / 33%)"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(101 115 126 / 33%)"
  },
  ".cm-gutters": {
    "background": "#304148",
    "borderRight": "10px"
  },
  ".cm-gutterElement span": {
    "color": "white"
  },
  ".cm-linenumber": {
    "color": "#d0d0d0"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #f8f8f0"
  },
  ".cm-fat-cursor .cm-cursor": {
    "backgroundColor": "#a2a8a175"
  },
  ".cm-animate-fat-cursor": {
    "backgroundColor": "#a2a8a175"
  },
  ".cm-comment": {
    "color": "#65737e"
  },
  ".cm-atom": {
    "color": "#c594c5"
  },
  ".cm-number": {
    "color": "#f99157"
  },
  ".cm-property": {
    "color": "#99c794"
  },
  ".cm-attribute,\n.cm-keyword": {
    "color": "#c594c5"
  },
  ".cm-builtin": {
    "color": "#66d9ef"
  },
  ".cm-string": {
    "color": "#99c794"
  },
  ".cm-variable,\n.cm-variable-2,\n.cm-variable-3": {
    "color": "#f8f8f2"
  },
  ".cm-def": {
    "color": "#69c"
  },
  ".cm-bracket": {
    "color": "#5fb3b3"
  },
  ".cm-tag": {
    "color": "#c594c5"
  },
  ".cm-header": {
    "color": "#c594c5"
  },
  ".cm-link": {
    "color": "#c594c5"
  },
  ".cm-error": {
    "background": "#c594c5",
    "color": "#f8f8f0"
  },
  ".cm-activeLine": {
    "background": "rgb(101 115 126 / 33%)"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "panda-syntax": EditorView.theme({
  "&": {
    "background": "#292a2b",
    "color": "#e6e6e6",
    "lineHeight": "1.5",
    "fontFamily": "\"Operator Mono\", \"Source Code Pro\", Menlo, Monaco, Consolas,\n        \"Courier New\", monospace"
  },
  ".cm-cursor": {
    "borderColor": "#ff2c6d"
  },
  ".cm-activeLine": {
    "background": "rgb(99 123 156 / 10%)"
  },
  ".cm-selectionBackground, &.cm-focused .cm-selectionBackground": {
    "background": "#fff"
  },
  ".cm-comment": {
    "fontStyle": "italic",
    "color": "#676b79"
  },
  ".cm-operator": {
    "color": "#f3f3f3"
  },
  ".cm-string": {
    "color": "#19f9d8"
  },
  ".cm-string-2": {
    "color": "#ffb86c"
  },
  ".cm-tag": {
    "color": "#ff2c6d"
  },
  ".cm-meta": {
    "color": "#b084eb"
  },
  ".cm-number": {
    "color": "#ffb86c"
  },
  ".cm-atom": {
    "color": "#ff2c6d"
  },
  ".cm-keyword": {
    "color": "#ff75b5"
  },
  ".cm-variable": {
    "color": "#ffb86c"
  },
  ".cm-variable-2": {
    "color": "#ff9ac1"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#ff9ac1"
  },
  ".cm-def": {
    "color": "#e6e6e6"
  },
  ".cm-property": {
    "color": "#f3f3f3"
  },
  ".cm-unit": {
    "color": "#ffb86c"
  },
  ".cm-attribute": {
    "color": "#ffb86c"
  },
  ".cm-matchingbracket": {
    "borderBottom": "1px dotted #19f9d8",
    "paddingBottom": "2px",
    "color": "#e6e6e6"
  },
  ".cm-gutters": {
    "background": "#292a2b",
    "borderRightColor": "rgb(255 255 255 / 10%)"
  },
  ".cm-linenumber": {
    "color": "#e6e6e6",
    "opacity": "0.6"
  }
}, { dark: true }),
  "paraiso-dark": EditorView.theme({
  "&": {
    "background": "#2f1e2e",
    "color": "#b9b6b0"
  },
  ".cm-selectionBackground": {
    "background": "#41323f"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(65 50 63 / 99%)"
  },
  ".cm-gutters": {
    "background": "#2f1e2e",
    "borderRight": "0"
  },
  ".cm-gutterElement span": {
    "color": "#ef6155"
  },
  ".cm-linenumber": {
    "color": "#776e71"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #8d8687"
  },
  ".cm-comment": {
    "color": "#e96ba8"
  },
  ".cm-atom": {
    "color": "#815ba4"
  },
  ".cm-number": {
    "color": "#815ba4"
  },
  ".cm-property,\n.cm-attribute": {
    "color": "#48b685"
  },
  ".cm-keyword": {
    "color": "#ef6155"
  },
  ".cm-string": {
    "color": "#fec418"
  },
  ".cm-variable": {
    "color": "#48b685"
  },
  ".cm-variable-2": {
    "color": "#06b6ef"
  },
  ".cm-def": {
    "color": "#f99b15"
  },
  ".cm-bracket": {
    "color": "#b9b6b0"
  },
  ".cm-tag": {
    "color": "#ef6155"
  },
  ".cm-link": {
    "color": "#815ba4"
  },
  ".cm-error": {
    "background": "#ef6155",
    "color": "#8d8687"
  },
  ".cm-activeLine": {
    "background": "#4d344a"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "paraiso-light": EditorView.theme({
  "&": {
    "background": "#e7e9db",
    "color": "#41323f"
  },
  ".cm-selectionBackground": {
    "background": "#b9b6b0"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "#b9b6b0"
  },
  ".cm-gutters": {
    "background": "#e7e9db",
    "borderRight": "0"
  },
  ".cm-gutterElement span": {
    "color": "black"
  },
  ".cm-linenumber": {
    "color": "#8d8687"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #776e71"
  },
  ".cm-comment": {
    "color": "#e96ba8"
  },
  ".cm-atom": {
    "color": "#815ba4"
  },
  ".cm-number": {
    "color": "#815ba4"
  },
  ".cm-property,\n.cm-attribute": {
    "color": "#48b685"
  },
  ".cm-keyword": {
    "color": "#ef6155"
  },
  ".cm-string": {
    "color": "#fec418"
  },
  ".cm-variable": {
    "color": "#48b685"
  },
  ".cm-variable-2": {
    "color": "#06b6ef"
  },
  ".cm-def": {
    "color": "#f99b15"
  },
  ".cm-bracket": {
    "color": "#41323f"
  },
  ".cm-tag": {
    "color": "#ef6155"
  },
  ".cm-link": {
    "color": "#815ba4"
  },
  ".cm-error": {
    "background": "#ef6155",
    "color": "#776e71"
  },
  ".cm-activeLine": {
    "background": "#cfd1c4"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: false }),
  "pastel-on-dark": EditorView.theme({
  "&": {
    "background": "#2c2827",
    "color": "#8f938f",
    "lineHeight": "1.5"
  },
  ".cm-selectionBackground": {
    "background": "rgb(221 240 255 / 20%)"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(221 240 255 / 20%)"
  },
  ".cm-gutters": {
    "background": "#34302f",
    "borderRight": "0",
    "padding": "0 3px"
  },
  ".cm-gutterElement span": {
    "color": "white"
  },
  ".cm-linenumber": {
    "color": "#8f938f"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #a7a7a7"
  },
  ".cm-comment": {
    "color": "#a6c6ff"
  },
  ".cm-atom": {
    "color": "#de8e30"
  },
  ".cm-number": {
    "color": "#ccc"
  },
  ".cm-property": {
    "color": "#8f938f"
  },
  ".cm-attribute": {
    "color": "#a6e22e"
  },
  ".cm-keyword": {
    "color": "#aeb2f8"
  },
  ".cm-string": {
    "color": "#66a968"
  },
  ".cm-variable": {
    "color": "#aeb2f8"
  },
  ".cm-variable-2": {
    "color": "#bebf55"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#de8e30"
  },
  ".cm-def": {
    "color": "#757ad8"
  },
  ".cm-bracket": {
    "color": "#f8f8f2"
  },
  ".cm-tag": {
    "color": "#c1c144"
  },
  ".cm-link": {
    "color": "#ae81ff"
  },
  ".cm-qualifier,\n.cm-builtin": {
    "color": "#c1c144"
  },
  ".cm-error": {
    "background": "#757ad8",
    "color": "#f8f8f0"
  },
  ".cm-activeLine": {
    "background": "rgb(255 255 255 / 3.1%)"
  },
  ".cm-matchingbracket": {
    "border": "1px solid rgb(255 255 255 / 25%)",
    "color": "#8f938f",
    "margin": "-1px -1px 0"
  }
}, { dark: true }),
  "railscasts": EditorView.theme({
  "&": {
    "background": "#2b2b2b",
    "color": "#f4f1ed"
  },
  ".cm-selectionBackground, &.cm-focused .cm-selectionBackground": {
    "background": "#272935"
  },
  ".cm-gutters": {
    "background": "#2b2b2b",
    "borderRight": "0"
  },
  ".cm-linenumber": {
    "color": "#5a647e"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #d4cfc9"
  },
  ".cm-comment": {
    "color": "#bc9458"
  },
  ".cm-atom": {
    "color": "#b6b3eb"
  },
  ".cm-number": {
    "color": "#b6b3eb"
  },
  ".cm-property,\n.cm-attribute": {
    "color": "#a5c261"
  },
  ".cm-keyword": {
    "color": "#da4939"
  },
  ".cm-string": {
    "color": "#ffc66d"
  },
  ".cm-variable": {
    "color": "#a5c261"
  },
  ".cm-variable-2": {
    "color": "#6d9cbe"
  },
  ".cm-def": {
    "color": "#cc7833"
  },
  ".cm-error": {
    "background": "#da4939",
    "color": "#d4cfc9"
  },
  ".cm-bracket": {
    "color": "#f4f1ed"
  },
  ".cm-tag": {
    "color": "#da4939"
  },
  ".cm-link": {
    "color": "#b6b3eb"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  },
  ".cm-activeLine": {
    "background": "#303040"
  }
}, { dark: true }),
  "rubyblue": EditorView.theme({
  "&": {
    "background": "#112435",
    "color": "white"
  },
  ".cm-selectionBackground": {
    "background": "#38566f"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(56 86 111 / 99%)"
  },
  ".cm-gutters": {
    "background": "#1f4661",
    "borderRight": "7px solid #3e7087"
  },
  ".cm-gutterElement span": {
    "color": "white"
  },
  ".cm-linenumber": {
    "color": "white"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid white"
  },
  ".cm-comment": {
    "color": "#999",
    "fontStyle": "italic",
    "lineHeight": "1em"
  },
  ".cm-atom": {
    "color": "#f4c20b"
  },
  ".cm-number,\n.cm-attribute": {
    "color": "#82c6e0"
  },
  ".cm-keyword": {
    "color": "#f0f"
  },
  ".cm-string": {
    "color": "#f08047"
  },
  ".cm-meta": {
    "color": "#f0f"
  },
  ".cm-variable-2,\n.cm-tag": {
    "color": "#7bd827"
  },
  ".cm-variable-3,\n.cm-def,\n.cm-type": {
    "color": "white"
  },
  ".cm-bracket": {
    "color": "#f0f"
  },
  ".cm-link": {
    "color": "#f4c20b"
  },
  ".cm-matchingbracket": {
    "color": "#f0f"
  },
  ".cm-builtin,\n.cm-special": {
    "color": "#ff9d00"
  },
  ".cm-error": {
    "color": "#af2018"
  },
  ".cm-activeLine": {
    "background": "#173047"
  }
}, { dark: true }),
  "seti": EditorView.theme({
  "&": {
    "backgroundColor": "#151718",
    "color": "#cfd2d1",
    "border": "none"
  },
  ".cm-gutters": {
    "color": "#404b53",
    "backgroundColor": "#0e1112",
    "border": "none"
  },
  ".cm-cursor": {
    "borderLeft": "solid thin #f8f8f0"
  },
  ".cm-linenumber": {
    "color": "#6d8a88"
  },
  "&.cm-focused .cm-selectionBackground, &.cm-focused .cm-selectionBackground": {
    "background": "rgb(255 255 255 / 10%)"
  },
  ".cm-comment": {
    "color": "#41535b"
  },
  ".cm-string,\n.cm-string-2": {
    "color": "#55b5db"
  },
  ".cm-number": {
    "color": "#cd3f45"
  },
  ".cm-variable": {
    "color": "#55b5db"
  },
  ".cm-variable-2": {
    "color": "#a074c4"
  },
  ".cm-def": {
    "color": "#55b5db"
  },
  ".cm-keyword": {
    "color": "#e6cd69"
  },
  ".cm-operator": {
    "color": "#9fca56"
  },
  ".cm-atom": {
    "color": "#cd3f45"
  },
  ".cm-meta": {
    "color": "#55b5db"
  },
  ".cm-tag": {
    "color": "#55b5db"
  },
  ".cm-attribute": {
    "color": "#9fca56"
  },
  ".cm-qualifier": {
    "color": "#9fca56"
  },
  ".cm-property": {
    "color": "#a074c4"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#9fca56"
  },
  ".cm-builtin": {
    "color": "#9fca56"
  },
  ".cm-activeLine": {
    "background": "#101213"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "shadowfox": EditorView.theme({
  "&": {
    "background": "#2a2a2e",
    "color": "#b1b1b3"
  },
  ".cm-selectionBackground": {
    "background": "#353b48"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "#353b48"
  },
  ".cm-gutters": {
    "background": "#0c0c0d",
    "borderRight": "1px solid #0c0c0d"
  },
  ".cm-gutterElement span": {
    "color": "#555"
  },
  ".cm-linenumber": {
    "color": "#939393"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #fff"
  },
  ".cm-comment": {
    "color": "#939393"
  },
  ".cm-atom": {
    "color": "#ff7de9"
  },
  ".cm-quote": {
    "color": "#ff7de9"
  },
  ".cm-builtin": {
    "color": "#ff7de9"
  },
  ".cm-attribute": {
    "color": "#ff7de9"
  },
  ".cm-keyword": {
    "color": "#ff7de9"
  },
  ".cm-error": {
    "color": "#ff7de9"
  },
  ".cm-number": {
    "color": "#6b89ff"
  },
  ".cm-string": {
    "color": "#6b89ff"
  },
  ".cm-string-2": {
    "color": "#6b89ff"
  },
  ".cm-meta": {
    "color": "#939393"
  },
  ".cm-hr": {
    "color": "#939393"
  },
  ".cm-header": {
    "color": "#75bfff"
  },
  ".cm-qualifier": {
    "color": "#75bfff"
  },
  ".cm-variable-2": {
    "color": "#75bfff"
  },
  ".cm-property": {
    "color": "#86de74"
  },
  ".cm-def": {
    "color": "#75bfff"
  },
  ".cm-bracket": {
    "color": "#75bfff"
  },
  ".cm-tag": {
    "color": "#75bfff"
  },
  ".cm-link:visited": {
    "color": "#75bfff"
  },
  ".cm-variable": {
    "color": "#b98eff"
  },
  ".cm-variable-3": {
    "color": "#d7d7db"
  },
  ".cm-link": {
    "color": "#737373"
  },
  ".cm-operator": {
    "color": "#b1b1b3"
  },
  ".cm-special": {
    "color": "#d7d7db"
  },
  ".cm-activeLine": {
    "background": "rgb(185 215 253 / 15%)"
  },
  ".cm-matchingbracket": {
    "outline": "solid 1px rgb(255 255 255 / 25%)",
    "color": "white"
  }
}, { dark: true }),
  "solarized": EditorView.theme({
  ".solarized.base03": {
    "color": "#002b36"
  },
  ".solarized.base02": {
    "color": "#073642"
  },
  ".solarized.base01": {
    "color": "#586e75"
  },
  ".solarized.base00": {
    "color": "#657b83"
  },
  ".solarized.base0": {
    "color": "#839496"
  },
  ".solarized.base1": {
    "color": "#93a1a1"
  },
  ".solarized.base2": {
    "color": "#eee8d5"
  },
  ".solarized.base3": {
    "color": "#fdf6e3"
  },
  ".solarized.solar-yellow": {
    "color": "#b58900"
  },
  ".solarized.solar-orange": {
    "color": "#cb4b16"
  },
  ".solarized.solar-red": {
    "color": "#dc322f"
  },
  ".solarized.solar-magenta": {
    "color": "#d33682"
  },
  ".solarized.solar-violet": {
    "color": "#6c71c4"
  },
  ".solarized.solar-blue": {
    "color": "#268bd2"
  },
  ".solarized.solar-cyan": {
    "color": "#2aa198"
  },
  ".solarized.solar-green": {
    "color": "#859900"
  },
  "&": {
    "boxShadow": "inset 7px 0 12px -6px #000"
  },
  ".cm-widget": {
    "textShadow": "none"
  },
  ".cm-header": {
    "color": "#586e75"
  },
  ".cm-quote": {
    "color": "#93a1a1"
  },
  ".cm-keyword": {
    "color": "#cb4b16"
  },
  ".cm-atom": {
    "color": "#d33682"
  },
  ".cm-number": {
    "color": "#d33682"
  },
  ".cm-def": {
    "color": "#2aa198"
  },
  ".cm-variable": {
    "color": "#839496"
  },
  ".cm-variable-2": {
    "color": "#b58900"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#6c71c4"
  },
  ".cm-property": {
    "color": "#2aa198"
  },
  ".cm-operator": {
    "color": "#6c71c4"
  },
  ".cm-comment": {
    "color": "#586e75",
    "fontStyle": "italic"
  },
  ".cm-string": {
    "color": "#859900"
  },
  ".cm-string-2": {
    "color": "#b58900"
  },
  ".cm-meta": {
    "color": "#859900"
  },
  ".cm-qualifier": {
    "color": "#b58900"
  },
  ".cm-builtin": {
    "color": "#d33682"
  },
  ".cm-bracket": {
    "color": "#cb4b16"
  },
  ".cm-matchingbracket": {
    "color": "#859900"
  },
  ".cm-nonmatchingbracket": {
    "color": "#dc322f"
  },
  ".cm-tag": {
    "color": "#93a1a1"
  },
  ".cm-attribute": {
    "color": "#2aa198"
  },
  ".cm-hr": {
    "color": "transparent",
    "borderTop": "1px solid #586e75",
    "display": "block"
  },
  ".cm-link": {
    "color": "#93a1a1",
    "cursor": "pointer"
  },
  ".cm-special": {
    "color": "#6c71c4"
  },
  ".cm-em": {
    "color": "#999",
    "textDecoration": "underline",
    "textDecorationStyle": "dotted"
  },
  ".cm-error,\n.cm-invalidchar": {
    "color": "#586e75",
    "borderBottom": "1px dotted #dc322f"
  },
  ".cm-selectionBackground": {
    "background": "#eee8d5"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "#eee8d5"
  },
  ".cm-gutters": {
    "backgroundColor": "#eee8d5"
  },
  ".cm-linenumber": {
    "padding": "0 5px"
  },
  ".cm-gutterElement span": {
    "color": "#cb4b16"
  },
  ".cm-gutter .cm-gutter-text": {
    "color": "#586e75"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #819090"
  },
  ".cm-fat-cursor .cm-cursor": {
    "background": "#586e75"
  },
  ".cm-animate-fat-cursor": {
    "backgroundColor": "#586e75"
  },
  ".cm-activeLine": {
    "background": "rgb(0 0 0 / 6%)"
  }
}, { dark: false }),
  "ssms": EditorView.theme({
  ".cm-keyword": {
    "color": "blue"
  },
  ".cm-comment": {
    "color": "darkgreen"
  },
  ".cm-string": {
    "color": "red"
  },
  ".cm-def": {
    "color": "black"
  },
  ".cm-variable": {
    "color": "black"
  },
  ".cm-variable-2": {
    "color": "black"
  },
  ".cm-atom": {
    "color": "darkgray"
  },
  ".cm-linenumber": {
    "color": "teal"
  },
  ".cm-activeLine": {
    "background": "#fff"
  },
  ".cm-string-2": {
    "color": "#f0f"
  },
  ".cm-operator,\n.cm-bracket,\n.cm-punctuation": {
    "color": "darkgray"
  },
  ".cm-gutters": {
    "borderRight": "3px solid #ffee62",
    "backgroundColor": "#fff"
  },
  ".cm-selectionBackground, &.cm-focused .cm-selectionBackground": {
    "background": "#add6ff"
  }
}, { dark: false }),
  "the-matrix": EditorView.theme({
  "&": {
    "background": "#000",
    "color": "#0f0"
  },
  ".cm-selectionBackground": {
    "background": "#2d2d2d"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(45 45 45 / 99%)"
  },
  ".cm-gutters": {
    "background": "#060",
    "borderRight": "2px solid #0f0"
  },
  ".cm-gutterElement span": {
    "color": "#0f0"
  },
  ".cm-linenumber": {
    "color": "#fff"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #0f0"
  },
  ".cm-keyword": {
    "color": "#008803",
    "fontWeight": "bold"
  },
  ".cm-atom": {
    "color": "#3ff"
  },
  ".cm-number": {
    "color": "#ffb94f"
  },
  ".cm-def": {
    "color": "#99c"
  },
  ".cm-variable": {
    "color": "#f6c"
  },
  ".cm-variable-2": {
    "color": "#c6f"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#96f"
  },
  ".cm-property": {
    "color": "#62ffa0"
  },
  ".cm-operator": {
    "color": "#999"
  },
  ".cm-comment": {
    "color": "#ccc"
  },
  ".cm-string": {
    "color": "#39c"
  },
  ".cm-meta": {
    "color": "#c9f"
  },
  ".cm-qualifier": {
    "color": "#fff700"
  },
  ".cm-builtin": {
    "color": "#30a"
  },
  ".cm-bracket": {
    "color": "#cc7"
  },
  ".cm-tag": {
    "color": "#ffbd40"
  },
  ".cm-attribute": {
    "color": "#fff700"
  },
  ".cm-error": {
    "color": "#f00"
  },
  ".cm-activeLine": {
    "background": "#040"
  }
}, { dark: true }),
  "tomorrow-night-bright": EditorView.theme({
  "&": {
    "background": "#000",
    "color": "#eaeaea"
  },
  ".cm-selectionBackground, &.cm-focused .cm-selectionBackground": {
    "background": "#424242"
  },
  ".cm-gutters": {
    "background": "#000",
    "borderRight": "0"
  },
  ".cm-gutterElement span": {
    "color": "#e78c45"
  },
  ".cm-linenumber": {
    "color": "#424242"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #6a6a6a"
  },
  ".cm-comment": {
    "color": "#d27b53"
  },
  ".cm-atom": {
    "color": "#a16a94"
  },
  ".cm-number": {
    "color": "#a16a94"
  },
  ".cm-property,\n.cm-attribute": {
    "color": "#9c9"
  },
  ".cm-keyword": {
    "color": "#d54e53"
  },
  ".cm-string": {
    "color": "#e7c547"
  },
  ".cm-variable": {
    "color": "#b9ca4a"
  },
  ".cm-variable-2": {
    "color": "#7aa6da"
  },
  ".cm-def": {
    "color": "#e78c45"
  },
  ".cm-bracket": {
    "color": "#eaeaea"
  },
  ".cm-tag": {
    "color": "#d54e53"
  },
  ".cm-link": {
    "color": "#a16a94"
  },
  ".cm-error": {
    "background": "#d54e53",
    "color": "#6a6a6a"
  },
  ".cm-activeLine": {
    "background": "#2a2a2a"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "tomorrow-night-eighties": EditorView.theme({
  "&": {
    "background": "#000",
    "color": "#ccc"
  },
  ".cm-selectionBackground": {
    "background": "#2d2d2d"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(45 45 45 / 99%)"
  },
  ".cm-gutters": {
    "background": "#000",
    "borderRight": "0"
  },
  ".cm-gutterElement span": {
    "color": "#f2777a"
  },
  ".cm-linenumber": {
    "color": "#515151"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid #6a6a6a"
  },
  ".cm-comment": {
    "color": "#d27b53"
  },
  ".cm-atom": {
    "color": "#a16a94"
  },
  ".cm-number": {
    "color": "#a16a94"
  },
  ".cm-property,\n.cm-attribute": {
    "color": "#9c9"
  },
  ".cm-keyword": {
    "color": "#f2777a"
  },
  ".cm-string": {
    "color": "#fc6"
  },
  ".cm-variable": {
    "color": "#9c9"
  },
  ".cm-variable-2": {
    "color": "#69c"
  },
  ".cm-def": {
    "color": "#f99157"
  },
  ".cm-bracket": {
    "color": "#ccc"
  },
  ".cm-tag": {
    "color": "#f2777a"
  },
  ".cm-link": {
    "color": "#a16a94"
  },
  ".cm-error": {
    "background": "#f2777a",
    "color": "#6a6a6a"
  },
  ".cm-activeLine": {
    "background": "#343600"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline",
    "color": "white"
  }
}, { dark: true }),
  "ttcn": EditorView.theme({
  ".cm-quote": {
    "color": "#090"
  },
  ".cm-negative": {
    "color": "#d44"
  },
  ".cm-positive": {
    "color": "#292"
  },
  ".cm-header,\n.cm-strong": {
    "fontWeight": "bold"
  },
  ".cm-em": {
    "fontStyle": "italic"
  },
  ".cm-link": {
    "color": "#00c",
    "textDecoration": "underline"
  },
  ".cm-strikethrough": {
    "textDecoration": "line-through"
  },
  ".cm-header": {
    "color": "#00f",
    "fontWeight": "bold"
  },
  ".cm-atom": {
    "color": "#219"
  },
  ".cm-attribute": {
    "color": "#00c"
  },
  ".cm-bracket": {
    "color": "#997"
  },
  ".cm-comment": {
    "color": "#333"
  },
  ".cm-def": {
    "color": "#00f"
  },
  ".cm-error": {
    "color": "#f00"
  },
  ".cm-hr": {
    "color": "#999"
  },
  ".cm-invalidchar": {
    "color": "#f00"
  },
  ".cm-keyword": {
    "fontWeight": "bold"
  },
  ".cm-meta": {
    "color": "#555"
  },
  ".cm-qualifier": {
    "color": "#555"
  },
  ".cm-string": {
    "color": "#006400"
  },
  ".cm-string-2": {
    "color": "#f50"
  },
  ".cm-strong": {
    "fontWeight": "bold"
  },
  ".cm-tag": {
    "color": "#170"
  },
  ".cm-variable": {
    "color": "#8b2252"
  },
  ".cm-variable-2": {
    "color": "#05a"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#085"
  },
  ".cm-accessTypes,\n.cm-compareTypes": {
    "color": "#27408b"
  },
  ".cm-cmipVerbs": {
    "color": "#8b2252"
  },
  ".cm-modifier": {
    "color": "#d2691e"
  },
  ".cm-status": {
    "color": "#8b4545"
  },
  ".cm-storage": {
    "color": "#a020f0"
  },
  ".cm-tags": {
    "color": "#006400"
  },
  ".cm-externalCommands": {
    "color": "#8b4545",
    "fontWeight": "bold"
  },
  ".cm-fileNCtrlMaskOptions,\n.cm-sectionTitle": {
    "color": "#2e8b57",
    "fontWeight": "bold"
  },
  ".cm-booleanConsts,\n.cm-otherConsts,\n.cm-verdictConsts": {
    "color": "#006400"
  },
  ".cm-configOps,\n.cm-functionOps,\n.cm-portOps,\n.cm-sutOps,\n.cm-timerOps,\n.cm-verdictOps": {
    "color": "#00f"
  },
  ".cm-preprocessor,\n.cm-templateMatch,\n.cm-ttcn3Macros": {
    "color": "#27408b"
  },
  ".cm-types": {
    "color": "#a52a2a",
    "fontWeight": "bold"
  },
  ".cm-visibilityModifiers": {
    "fontWeight": "bold"
  }
}, { dark: false }),
  "twilight": EditorView.theme({
  "&": {
    "background": "#141414",
    "color": "#f7f7f7"
  },
  ".cm-selectionBackground": {
    "background": "#323232"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(50 50 50 / 99%)"
  },
  ".cm-gutters": {
    "background": "#222",
    "borderRight": "1px solid #aaa"
  },
  ".cm-gutterElement span": {
    "color": "white"
  },
  ".cm-linenumber": {
    "color": "#aaa"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid white"
  },
  ".cm-keyword": {
    "color": "#f9ee98"
  },
  ".cm-atom": {
    "color": "#fc0"
  },
  ".cm-number": {
    "color": "#ca7841"
  },
  ".cm-def": {
    "color": "#8da6ce"
  },
  ".cm-variable-2,\n.cm-tag": {
    "color": "#607392"
  },
  ".cm-variable-3,\n.cm-def,\n.cm-type": {
    "color": "#607392"
  },
  ".cm-operator": {
    "color": "#cda869"
  },
  ".cm-comment": {
    "color": "#777",
    "fontStyle": "italic",
    "fontWeight": "normal"
  },
  ".cm-string": {
    "color": "#8f9d6a",
    "fontStyle": "italic"
  },
  ".cm-string-2": {
    "color": "#bd6b18"
  },
  ".cm-meta": {
    "backgroundColor": "#141414",
    "color": "#f7f7f7"
  },
  ".cm-builtin": {
    "color": "#cda869"
  },
  ".cm-tag": {
    "color": "#997643"
  },
  ".cm-attribute": {
    "color": "#d6bb6d"
  },
  ".cm-header": {
    "color": "#ff6400"
  },
  ".cm-hr": {
    "color": "#aeaeae"
  },
  ".cm-link": {
    "color": "#ad9361",
    "fontStyle": "italic",
    "textDecoration": "none"
  },
  ".cm-error": {
    "borderBottom": "1px solid red"
  },
  ".cm-activeLine": {
    "background": "#27282e"
  },
  ".cm-matchingbracket": {
    "outline": "1px solid grey",
    "color": "white"
  }
}, { dark: true }),
  "vibrant-ink": EditorView.theme({
  "&": {
    "background": "black",
    "color": "white"
  },
  ".cm-selectionBackground": {
    "background": "#35493c"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(53 73 60 / 99%)"
  },
  ".cm-gutters": {
    "background": "#002240",
    "borderRight": "1px solid #aaa"
  },
  ".cm-gutterElement span": {
    "color": "white"
  },
  ".cm-linenumber": {
    "color": "#d0d0d0"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid white"
  },
  ".cm-keyword": {
    "color": "#cc7832"
  },
  ".cm-atom": {
    "color": "#fc0"
  },
  ".cm-number": {
    "color": "#ffee98"
  },
  ".cm-def": {
    "color": "#8da6ce"
  },
  ".cm-variable-2,\n.cm-tag": {
    "color": "#ffc66d"
  },
  ".cm-variable-3,\n.cm-def,\n.cm-type": {
    "color": "#ffc66d"
  },
  ".cm-operator": {
    "color": "#888"
  },
  ".cm-comment": {
    "color": "gray",
    "fontWeight": "bold"
  },
  ".cm-string": {
    "color": "#a5c25c"
  },
  ".cm-string-2": {
    "color": "red"
  },
  ".cm-meta": {
    "color": "#d8fa3c"
  },
  ".cm-builtin": {
    "color": "#8da6ce"
  },
  ".cm-tag": {
    "color": "#8da6ce"
  },
  ".cm-attribute": {
    "color": "#8da6ce"
  },
  ".cm-header": {
    "color": "#ff6400"
  },
  ".cm-hr": {
    "color": "#aeaeae"
  },
  ".cm-link": {
    "color": "#5656f3"
  },
  ".cm-error": {
    "borderBottom": "1px solid red"
  },
  ".cm-activeLine": {
    "background": "#27282e"
  },
  ".cm-matchingbracket": {
    "outline": "1px solid grey",
    "color": "white"
  }
}, { dark: true }),
  "xq-dark": EditorView.theme({
  "&": {
    "background": "#0a001f",
    "color": "#f8f8f8"
  },
  ".cm-selectionBackground": {
    "background": "#27007a"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "rgb(39 0 122 / 99%)"
  },
  ".cm-gutters": {
    "background": "#0a001f",
    "borderRight": "1px solid #aaa"
  },
  ".cm-gutterElement span": {
    "color": "#ffbd40"
  },
  ".cm-linenumber": {
    "color": "#f8f8f8"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid white"
  },
  ".cm-keyword": {
    "color": "#ffbd40"
  },
  ".cm-atom": {
    "color": "#6c8cd5"
  },
  ".cm-number": {
    "color": "#164"
  },
  ".cm-def": {
    "color": "#fff",
    "textDecoration": "underline"
  },
  ".cm-variable": {
    "color": "#fff"
  },
  ".cm-variable-2": {
    "color": "#eee"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#ddd"
  },
  ".cm-property": {},
  ".cm-operator": {},
  ".cm-comment": {
    "color": "gray"
  },
  ".cm-string": {
    "color": "#9fee00"
  },
  ".cm-meta": {
    "color": "yellow"
  },
  ".cm-qualifier": {
    "color": "#fff700"
  },
  ".cm-builtin": {
    "color": "#30a"
  },
  ".cm-bracket": {
    "color": "#cc7"
  },
  ".cm-tag": {
    "color": "#ffbd40"
  },
  ".cm-attribute": {
    "color": "#fff700"
  },
  ".cm-error": {
    "color": "#f00"
  },
  ".cm-activeLine": {
    "background": "#27282e"
  },
  ".cm-matchingbracket": {
    "outline": "1px solid grey",
    "color": "white"
  }
}, { dark: true }),
  "xq-light": EditorView.theme({
  ".cm-keyword": {
    "lineHeight": "1em",
    "fontWeight": "bold",
    "color": "#5a5cad"
  },
  ".cm-atom": {
    "color": "#6c8cd5"
  },
  ".cm-number": {
    "color": "#164"
  },
  ".cm-def": {
    "textDecoration": "underline"
  },
  ".cm-variable": {
    "color": "black"
  },
  ".cm-variable-2": {
    "color": "black"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "black"
  },
  ".cm-property": {},
  ".cm-operator": {},
  ".cm-comment": {
    "color": "#0080ff",
    "fontStyle": "italic"
  },
  ".cm-string": {
    "color": "red"
  },
  ".cm-meta": {
    "color": "yellow"
  },
  ".cm-qualifier": {
    "color": "grey"
  },
  ".cm-builtin": {
    "color": "#7ea656"
  },
  ".cm-bracket": {
    "color": "#cc7"
  },
  ".cm-tag": {
    "color": "#3f7f7f"
  },
  ".cm-attribute": {
    "color": "#7f007f"
  },
  ".cm-error": {
    "color": "#f00"
  },
  ".cm-activeLine": {
    "background": "#e8f2ff"
  },
  ".cm-matchingbracket": {
    "outline": "1px solid grey",
    "color": "black",
    "background": "yellow"
  }
}, { dark: false }),
  "yeti": EditorView.theme({
  "&": {
    "backgroundColor": "#eceae8",
    "color": "#d1c9c0",
    "border": "none"
  },
  ".cm-gutters": {
    "color": "#adaba6",
    "backgroundColor": "#e5e1db",
    "border": "none"
  },
  ".cm-cursor": {
    "borderLeft": "solid thin #d1c9c0"
  },
  ".cm-linenumber": {
    "color": "#adaba6"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "#dcd8d2"
  },
  ".cm-comment": {
    "color": "#d4c8be"
  },
  ".cm-string,\n.cm-string-2": {
    "color": "#96c0d8"
  },
  ".cm-number": {
    "color": "#a074c4"
  },
  ".cm-variable": {
    "color": "#55b5db"
  },
  ".cm-variable-2": {
    "color": "#a074c4"
  },
  ".cm-def": {
    "color": "#55b5db"
  },
  ".cm-operator": {
    "color": "#9fb96e"
  },
  ".cm-keyword": {
    "color": "#9fb96e"
  },
  ".cm-atom": {
    "color": "#a074c4"
  },
  ".cm-meta": {
    "color": "#96c0d8"
  },
  ".cm-tag": {
    "color": "#96c0d8"
  },
  ".cm-attribute": {
    "color": "#9fb96e"
  },
  ".cm-qualifier": {
    "color": "#96c0d8"
  },
  ".cm-property": {
    "color": "#a074c4"
  },
  ".cm-builtin": {
    "color": "#a074c4"
  },
  ".cm-variable-3,\n.cm-type": {
    "color": "#96c0d8"
  },
  ".cm-activeLine": {
    "background": "#e7e4e0"
  },
  ".cm-matchingbracket": {
    "textDecoration": "underline"
  }
}, { dark: false }),
  "yonce": EditorView.theme({
  "&": {
    "background": "#1c1c1c",
    "color": "#d4d4d4"
  },
  ".cm-selectionBackground": {
    "background": "rgb(252 69 133 / 47.8%)"
  },
  ".cm-selectionBackground,\n&.cm-focused .cm-selectionBackground": {
    "background": "rgb(252 67 132 / 47%)"
  },
  "& pre": {
    "paddingLeft": "0"
  },
  ".cm-gutters": {
    "background": "#1c1c1c",
    "borderRight": "0"
  },
  ".cm-linenumber": {
    "color": "#777"
  },
  ".cm-activeline .cm-linenumber.cm-gutter-elt": {
    "background": "#1c1c1c",
    "color": "#fc4384"
  },
  ".cm-cursor": {
    "borderLeft": "2px solid #fc4384"
  },
  ".cm-searching": {
    "background": "rgb(243 155 53 / 30%)",
    "outline": "1px solid #f39b35"
  },
  ".cm-searching.cm-selectionBackground": {
    "background": "rgb(243 155 53 / 70%)",
    "color": "white"
  },
  ".cm-keyword": {
    "color": "#00a7aa"
  },
  ".cm-atom": {
    "color": "#f39b35"
  },
  ".cm-number,\n.cm-type": {
    "color": "#a06fca"
  },
  ".cm-def": {
    "color": "#98e342"
  },
  ".cm-property,\n.cm-variable": {
    "color": "#d4d4d4",
    "fontStyle": "italic"
  },
  ".cm-variable-2": {
    "color": "#da7dae",
    "fontStyle": "italic"
  },
  ".cm-variable-3": {
    "color": "#a06fca"
  },
  ".cm-type.cm-def": {
    "color": "#fc4384",
    "fontStyle": "normal",
    "textDecoration": "underline"
  },
  ".cm-property.cm-def": {
    "color": "#fc4384",
    "fontStyle": "normal"
  },
  ".cm-callee": {
    "color": "#fc4384",
    "fontStyle": "normal"
  },
  ".cm-operator": {
    "color": "#fc4384"
  },
  ".cm-qualifier,\n.cm-tag": {
    "color": "#fc4384"
  },
  ".cm-tag.cm-bracket": {
    "color": "#d4d4d4"
  },
  ".cm-attribute": {
    "color": "#a06fca"
  },
  ".cm-comment": {
    "color": "#696d70",
    "fontStyle": "italic",
    "fontWeight": "normal"
  },
  ".cm-comment.cm-tag": {
    "color": "#fc4384"
  },
  ".cm-comment.cm-attribute": {
    "color": "#d4d4d4"
  },
  ".cm-string": {
    "color": "#e6db74"
  },
  ".cm-string-2": {
    "color": "#f39b35"
  },
  ".cm-meta": {
    "color": "#d4d4d4",
    "background": "inherit"
  },
  ".cm-builtin": {
    "color": "#fc4384"
  },
  ".cm-header": {
    "color": "#da7dae"
  },
  ".cm-hr": {
    "color": "#98e342"
  },
  ".cm-link": {
    "color": "#696d70",
    "fontStyle": "italic",
    "textDecoration": "none"
  },
  ".cm-error": {
    "borderBottom": "1px solid #c42412"
  },
  ".cm-activeLine": {
    "background": "#272727"
  },
  ".cm-matchingbracket": {
    "outline": "1px solid grey",
    "color": "#d4d4d4"
  }
}, { dark: true }),
  "zenburn": EditorView.theme({
  ".cm-gutters": {
    "background": "#3f3f3f"
  },
  ".cm-foldgutter-open,\n.cm-foldgutter-folded": {
    "color": "#999"
  },
  ".cm-cursor": {
    "borderLeft": "1px solid white"
  },
  "&": {
    "backgroundColor": "#3f3f3f",
    "color": "#dcdccc"
  },
  ".cm-builtin": {
    "color": "#dcdccc",
    "fontWeight": "bold"
  },
  ".cm-comment": {
    "color": "#7f9f7f"
  },
  ".cm-keyword": {
    "color": "#f0dfaf",
    "fontWeight": "bold"
  },
  ".cm-atom": {
    "color": "#bfebbf"
  },
  ".cm-def": {
    "color": "#dcdccc"
  },
  ".cm-variable": {
    "color": "#dfaf8f"
  },
  ".cm-variable-2": {
    "color": "#dcdccc"
  },
  ".cm-string": {
    "color": "#cc9393"
  },
  ".cm-string-2": {
    "color": "#cc9393"
  },
  ".cm-number": {
    "color": "#dcdccc"
  },
  ".cm-tag": {
    "color": "#93e0e3"
  },
  ".cm-property": {
    "color": "#dfaf8f"
  },
  ".cm-attribute": {
    "color": "#dfaf8f"
  },
  ".cm-qualifier": {
    "color": "#7cb8bb"
  },
  ".cm-meta": {
    "color": "#f0dfaf"
  },
  ".cm-header": {
    "color": "#f0efd0"
  },
  ".cm-operator": {
    "color": "#f0efd0"
  },
  ".cm-matchingbracket": {
    "boxSizing": "border-box",
    "background": "transparent",
    "borderBottom": "1px solid"
  },
  ".cm-nonmatchingbracket": {
    "borderBottom": "1px solid",
    "background": "none"
  },
  ".cm-activeline": {
    "background": "#000"
  },
  ".cm-activeLine": {
    "background": "#000"
  },
  ".cm-selectionBackground": {
    "background": "#545454"
  },
  "&.cm-focused .cm-selectionBackground": {
    "background": "#4f4f4f"
  }
}, { dark: true })
};

export default themes;