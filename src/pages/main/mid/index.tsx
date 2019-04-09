import React, { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { Mode } from "../../../components/Editor";

const layoutStyle = {
    flex: 1,
    overflow: "hidden"
};

const style = {
    ...layoutStyle,
    backgroundColor: "#586e75",
    color: "palegoldenrod"
};

const javascript = () => <section style={style} id="display"></section>;

const markdown = (source?: string) => (
    <section style={style} id="display"><ReactMarkdown source={source} /></section>
);

type Props = { mode: Mode, content?: string };

export default (props: Props) => {
    switch (props.mode) {
        case Mode.Javascript: return javascript();
        case Mode.Markdown: return markdown(props.content);
        default: throw new Error("doesn't support")
    }
};
