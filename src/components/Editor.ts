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

    constructor(props: AceEditorProps) {
        super(props)
    }
}

// const defaultName = "code.js";
// const getExtension = (filename: string): string | undefined => filename.split(".").pop();

// export default (props: AceEditorProps) => {
//     if (!props.name) {
//         props.name = defaultName;
//     }
//     switch (getExtension(props.name)) {
//         case "js": return createEditor(Mode.Javascript, props);
//         case "md": return createEditor(Mode.Markdown, props);
//         default: throw new Error("file name must have extension with .js or .md")
//     }
// };
