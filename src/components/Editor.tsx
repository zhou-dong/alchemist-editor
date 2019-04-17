import AceEditor, { AceEditorProps, AceOptions, EditorProps } from "react-ace";
import "brace/mode/javascript";
import "brace/mode/markdown";
import "brace/mode/plain_text";
import "brace/theme/solarized_dark";
import { connect } from "react-redux";
import { StoreState } from "../store";
import { getMode } from "../utils/fileUtils";
import { defaultFontSize } from "../configurations";

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
    fontSize: defaultFontSize,
    theme: "solarized_dark",
    showGutter: true,
    setOptions: defaultAceOptions,
    editorProps: defaultEditorProps
};

const mapStateToProps = (storeState: StoreState) => ({
    value: storeState.documents[storeState.activated].content,
    mode: getMode(storeState.documents[storeState.activated].name)
});

@(connect(mapStateToProps, {}) as any)
export default class extends AceEditor {
    static defaultProps = defaultAceEditorProps
}
