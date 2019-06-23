import React from "react";
import ReactMarkdown from "react-markdown";
import { connect } from "react-redux";
import { getMode } from "../utils/fileUtils";
import StoreState from "../store/state";

const style = {
    flex: 1,
    overflow: "scroll",
    // backgroundColor: "#586e75",
    backgroundColor: "black",
    color: "palegoldenrod",
    paddingLeft: "10px",
    paddingRight: "10px",
}

interface Props {
    id: string;
    content: string;
    name: string;
}

const Visual = (props: Props) => {
    switch (getMode(props.name)) {
        case "javascript": return (<main style={style} id={props.id} ></main>);
        case "markdown": return (<main style={style}><ReactMarkdown source={props.content} /></main>);
        default: return (<main style={style}>{props.content}</main>)
    }
};

const mapStateToProps = (storeState: StoreState): Props => {
    const { id, content, name } = storeState.activated;
    return ({ id, content, name });
}

export default connect(mapStateToProps, {})(Visual)
