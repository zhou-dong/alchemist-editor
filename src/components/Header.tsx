import React from "react";
import { connect } from "react-redux";
import Document from "../models/document";
import { StoreState } from "../store";

const style = {
    backgroundColor: "#073642",
    textAlign: "center",
} as React.CSSProperties;

const mapStateToProps = (storeState: StoreState): Document => {
    return storeState.documents[storeState.activated];
}

const Header = (props: Document) => (
    <header style={style}>
        {`${props.categoryName} > ${props.collectionName} > ${props.name}`}
    </header>
);

export default connect(mapStateToProps, {})(Header);
