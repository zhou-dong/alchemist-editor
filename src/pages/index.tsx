import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";

const style = {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
} as React.CSSProperties;

interface Props {
    execute: () => any;
    midNode: ReactNode;
    rightNode: ReactNode;
}

const App = (props: Props) => (
    <div style={style}>
        <Header />
        <Main {...props} />
        <Footer />
    </div>
);

export default App;
