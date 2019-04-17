import React from "react";
import Mid from "./mid";
import Left from "./left";
import Right from "./right";

const style = {
    display: 'flex',
    flex: 1,
    overflow: "hidden",
};

export default () => (
    <React.Fragment>
        <div style={style}>
            <Left />
            <Mid />
            <Right />
        </div>
    </React.Fragment >
);
