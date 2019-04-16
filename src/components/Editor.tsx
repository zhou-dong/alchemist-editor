import React from "react";
import AceEditor, { AceEditorProps, AceOptions, EditorProps } from "react-ace";
import "brace/mode/javascript";
import "brace/mode/markdown";
import "brace/mode/plain_text";
import "brace/theme/solarized_dark";
import { ICode, IFileLocation } from "../interfaces";
import { StoreState, getFileState } from "../redux/state";
import { connect } from "react-redux";

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

class DefaultEditor extends AceEditor {
    static defaultProps = defaultAceEditorProps
}

export type Props = AceEditorProps & ICode & IFileLocation;

const mapStateToProps = (storeState: StoreState, ownProps: Props): Props => {
    return getFileState(storeState, ownProps).editorProps;
}

@(connect(mapStateToProps, {}) as any)
export default class extends React.Component<Props> {
    render() {
        return (
            <DefaultEditor {...this.props} value={this.props.code} />
        );
    }
}
