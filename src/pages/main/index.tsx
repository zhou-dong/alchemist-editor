import React, { ReactNode } from 'react';

import Left from "./left";
import Right from "./right";
import Mid from "./mid";
import { Mode } from '../../components/Editor';

const style = {
    display: 'flex',
    flex: 1,
};

interface Props {
    execute: () => any;
    rightNode: ReactNode;
    mode: Mode;
    content?: string;
}

export default (props: Props) => {
    return (
        <div style={style}>
            <Left />
            <Mid {...props} />
            <Right reactNode={props.rightNode} execute={props.execute} />
        </div>
    )
};
