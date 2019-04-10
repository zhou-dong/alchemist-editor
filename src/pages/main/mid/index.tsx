import React, { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { AceEditorProps } from "react-ace";
import { getMode } from "../../../utils/fileUtils";
const layoutStyle = {
    flex: 1,
    overflow: "hidden"
};

const style = {
    ...layoutStyle,
    backgroundColor: "#586e75",
    color: "palegoldenrod"
};

const plain_text = (source?: string) => <section style={style}> {source} </section>;

const javascript = () => <section style={style} id="display"></section>;

const markdown = (source?: string) => (
    <section style={style}><ReactMarkdown source={source} /></section>
);

interface Props extends AceEditorProps {
    name: string;
}

export default ({ name, value }: Props) => {
    switch (getMode(name)) {
        case "javascript": return javascript();
        case "markdown": return markdown(value);
        case "plain_text": return plain_text(value);
        default: throw new Error("doesn't support")
    }
};
