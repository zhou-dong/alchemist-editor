import AceEditor, { AceEditorProps, AceOptions, EditorProps } from "react-ace";
import "brace/mode/javascript";
import "brace/mode/markdown";
import "brace/theme/solarized_dark";

const defaultAceOptions: AceOptions = {
    fontFamily: "'Courier New', Menlo, Monaco, monospace",
    dragEnabled: true,
    dragDelay: 100
};

const defaultEditorProps: EditorProps = {
    $blockScrolling: false
};

const defaultAceEditorProps: AceEditorProps = {
    width: "100%",
    height: "100%",
    fontSize: 14,
    theme: "solarized_dark",
    showGutter: true,
    setOptions: defaultAceOptions,
    editorProps: defaultEditorProps
};

export class MarkdownEditor extends AceEditor {
    static defaultProps = { ...defaultAceEditorProps, mode: "markdown" }
}

export class JavascriptEditor extends AceEditor {
    static defaultProps = { ...defaultAceEditorProps, mode: "javascript" }
}
