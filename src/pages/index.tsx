import React from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";
import { Props as EditorProps } from "../components/Editor";

const style = {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
} as React.CSSProperties;

interface Props extends EditorProps {
    execute: () => any;
}

const App = (props: Props) => (
    <div style={style}>
        <Header />
        <Main {...props} />
        <Footer />
    </div>
);

export default App;
