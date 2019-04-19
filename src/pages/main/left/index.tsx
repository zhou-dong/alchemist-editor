import React from 'react';
import Resizable from "re-resizable";
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
};

export default () => (
    <Resizable enable={{ right: true }} defaultSize={{ width: 180 }} >
        <nav style={style}>
            <Nav />
        </nav>
    </Resizable>
);
