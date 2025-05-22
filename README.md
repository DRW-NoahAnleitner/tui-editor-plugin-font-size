# tui-editor-plugin-font-size

This is a plugin of [TOAST UI Editor](https://github.com/nhn/tui.editor/tree/master/apps/editor) to font size editing text.<br>
based on [@toast-ui/editor-plugin-color-syntax](https://github.com/nhn/tui.editor/tree/master/plugins/color-syntax)

![font-size](./readme_img.png)

### Install

```sh
$ npm install git+https://github.com/DRW-NoahAnleitner/tui-editor-plugin-font-size#main
```

### Usage

```js
import Editor from "@toast-ui/editor";
import fontSize from "tui-editor-plugin-font-size";
import "tui-editor-plugin-font-size/dist/tui-editor-plugin-font-size.css";

const editor = new Editor({
  // ...
  plugins: [fontSize],
});
```
