import React from 'react';
import Resizable from "re-resizable";

const layoutStyle = {
    flex: 1,
    order: -1,
    height: "100%",
    overflow: "hidden"
};

const style = {
    ...layoutStyle,
    backgroundColor: "#002B36",
};

export default () => (
    <Resizable enable={{ right: true }}>
        <nav style={style}>
            nav bar
        </nav>
    </Resizable>
);
