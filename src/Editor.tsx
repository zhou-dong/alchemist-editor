import React from "react";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/solarized_dark";

const mode = "javascript";
const theme = "solarized_dark";
const fontSize = 16;
const fontFamily = "'Courier New', Menlo, Monaco, monospace";

export interface Props {
    onChange: (value: string, event?: any) => void;
    defaultValue: string;
}

export default (props: Props) => (
    <AceEditor
        width={"100%"}
        height={"100%"}
        mode={mode}
        theme={theme}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        fontSize={fontSize}
        editorProps={{
            $blockScrolling: false,
        }}
        setOptions={{
            fontFamily,
            dragEnabled: true,
            dragDelay: 100
        }}
    />
);
