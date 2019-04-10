import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";
import { AceEditorProps } from "../../node_modules/react-ace";

const style = {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
} as React.CSSProperties;

interface Props extends AceEditorProps {
    play?: () => any;
    handleSwitch: () => any;
    name: string;
    value: string;
    defaultValue: string;
}

const App = (props: Props) => (
    <div style={style}>
        <Header />
        <Main {...props} />
        <Footer />
    </div>
);

export default App;
