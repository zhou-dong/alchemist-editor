import React from "react";
import { AceEditorProps } from "react-ace";
import Left from "./left";
import Right from "./right";
import Mid from "./mid";

const style = {
    display: 'flex',
    flex: 1,
};

interface Props extends AceEditorProps {
    play?: () => any;
    handleSwitch: () => any;
    name: string;
    value: string;
    defaultValue: string;
}

export default (props: Props) => {
    return (
        <div style={style}>
            <Left />
            <Mid {...props} />
            <Right {...props} />
        </div>
    )
};
