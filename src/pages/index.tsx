import React from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";

const style = {
    display: "flex",
    minHeight: "100vh",
    maxHeight: "100vh",
    flexDirection: "column",
    overflow: "hidden",
} as React.CSSProperties;

const App = () => (
    <div style={style}>
        <Header />
        <Main />
        <Footer />
    </div>
);

export default App;
