import React from "react";
import ReactMarkdown from "react-markdown";

// npm i -D @types/webpack-env
const webpackMarkdownLoader = require.context(`!raw-loader!../../../example/queue/`, false, /\.md$/, );

const tt = webpackMarkdownLoader("./readme.md");

const layoutStyle = {
    flex: 1,
    overflow: "hidden"
};

const style = {
    ...layoutStyle,
    backgroundColor: "#586e75",
    color: "palegoldenrod"
};

export default () => (
    <section style={style} id="display">
        <ReactMarkdown source={tt.default} />
    </section>
);
