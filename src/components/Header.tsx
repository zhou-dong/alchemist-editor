import React from "react";
import { connect } from "react-redux";
import { IFileLocation } from "../interfaces";
import { StoreState, getFileState } from "../redux/state";

const style = {
    backgroundColor: "#073642",
    textAlign: "center",
} as React.CSSProperties;

export type Props = IFileLocation;

const mapStateToProps = (storeState: StoreState, ownProps: Props): Props => {
    return getFileState(storeState, ownProps).headerProps;
}

@(connect(mapStateToProps, {}) as any)
export default class extends React.Component<Props> {
    render() {
        return (
            <header style={style}>
                {`${this.props.folder} > ${this.props.project} > ${this.props.file}`}
            </header>
        );
    }
}
