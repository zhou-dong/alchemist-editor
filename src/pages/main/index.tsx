import React from 'react';

import Left from "./left";
import Right from "./right";
import Mid from "./mid";
import { Props as EditorProps } from "../../components/Editor";

const style = {
    display: 'flex',
    flex: 1,
};

interface Props extends EditorProps {
    execute: () => any;
}

export default (props: Props) => {
    return (
        <div style={style}>
            <Left />
            <Mid />
            <Right {...props} />
        </div>
    )
};
