import React, { ReactNode } from 'react';

import Left from "./left";
import Right from "./right";
import Mid from "./mid";

const style = {
    display: 'flex',
    flex: 1,
};

interface Props {
    execute: () => any;
    midNode: ReactNode;
    rightNode: ReactNode;
}

export default (props: Props) => {
    return (
        <div style={style}>
            <Left />
            <Mid reactNode={props.midNode} />
            <Right reactNode={props.rightNode} execute={props.execute} />
        </div>
    )
};
