import React from 'react';
import ReactMarkdown from "react-markdown";
import { connect } from "react-redux";
import Document from "../models/document";
import { getMode } from "../utils/fileUtils";
import { StoreState } from "../store";

const style = {
    flex: 2,
    overflow: "scroll",
    backgroundColor: "#586e75",
    color: "palegoldenrod",
}

const Visual = (props: Document) => {
    switch (getMode(props.name)) {
        case "javascript":
            return (<main style={style} id={props.id} ></main>);
        case "markdown":
            return (<main style={style}><ReactMarkdown source={props.content} /></main>);
        default:
            return (<main style={style}>{props.content}</main>)
    }
};

const mapStateToProps = (storeState: StoreState) => {
    return storeState.documents[storeState.activated];
}

export default connect(mapStateToProps, {})(Visual)