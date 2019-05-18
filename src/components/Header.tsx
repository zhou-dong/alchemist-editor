import React from "react";
import { connect } from "react-redux";
import Document from "../models/document";
import StoreState from "../store/state";

const style = {
    backgroundColor: "#01313f",
    textAlign: "center",
    fontFamily: "monospace, 'Open Sans', sans-serif, 'Courier New', Menlo, Monaco",
    fontSize: "14px",
    padding: "3px",
} as React.CSSProperties;

const Header = (props: Document) => (
    <header style={style}>
        {`${props.categoryName} > ${props.collectionName} > ${props.name}`}
    </header>
);

const mapStateToProps = (storeState: StoreState): Document => {
    return storeState.activated;
}

export default connect(mapStateToProps, {})(Header);
