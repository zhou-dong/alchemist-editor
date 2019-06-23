import React from "react";
import { Resizable } from "re-resizable";
import Nav from "../../../components/Nav";

const layoutStyle = {
    flex: 1,
    order: -1,
    height: "100%",
    overflowy: "scroll",
};

const style = {
    ...layoutStyle,
    overflow: "scroll",
    backgroundColor: "#002B36",
} as React.CSSProperties;

const defaultSize = {
    width: 180
}

export default () => (
    // <Resizable enable={{ right: true }} defaultSize={defaultSize} >
    <Resizable enable={{ right: true }}>
        <nav style={style}>
            <Nav />
        </nav>
    </Resizable>
);
