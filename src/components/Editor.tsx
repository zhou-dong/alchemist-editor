import AceEditor, { AceEditorProps, AceOptions, EditorProps } from "react-ace";
import "brace/mode/javascript";
import "brace/mode/markdown";
import "brace/mode/plain_text";
import "brace/theme/solarized_dark";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import StoreState from "../store/state";
import { getMode } from "../utils/fileUtils";
import Action, { editorOnChangeActionBuilder } from "../store/action";
import Document from "../models/document";

const defaultFontSize = 16;

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
    name: storeState.activated.name,
    value: storeState.activated.content,
    mode: getMode(storeState.activated.name)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    onChange: (value: string, event?: any) => dispatch(editorOnChangeActionBuilder({} as Document, value))
});

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class extends AceEditor {
    static defaultProps = defaultAceEditorProps
}
