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
    setOptions: defaultAceOptions,
    editorProps: defaultEditorProps
};

export default class extends AceEditor {
    static defaultProps = defaultAceEditorProps
}
