import React from "react";
import { AceEditorProps } from "react-ace";
import Left from "./left";
import Right from "./right";
import { MarkdownVisualEditor, JavascriptVisualEditor } from "../../components/VisualEditor";
import Executor from "../../components/Executor";
import { readme, example } from "../../example/stack/index";
import Code from "@material-ui/icons/Code";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const style = {
    display: 'flex',
    flex: 1,
    overflow: "hidden",
};

interface State {
    value: number;
}

export default class extends React.Component<{}, State> {
    readonly state = {
        value: 0,
    }

    private readonly handleTabChange = (event: any, value: any) => {
        this.setState({ value });
    };

    private readonly getTabes = () => (
        <AppBar position="static" style={{ minHeight: 0, minWidth: 0, padding: 0 }} color="default">
            <Tabs
                value={this.state.value}
                onChange={this.handleTabChange}
                variant="scrollable"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
                style={{ minHeight: 0 }}
            >
                <Tab
                    style={{ minHeight: 0, minWidth: 0, padding: 0, color: "#586e75", textTransform: "none" }}
                    label={<><Code fontSize="inherit" /><span style={{ lineHeight: "5px" }}> Code.js</span></>}
                />
                <Tab style={{ minHeight: 0, minWidth: 0, padding: 0, color: "#586e75", textTransform: "none" }} label="README.md" />
            </Tabs>
        </AppBar>
    )

    render() {
        return (
            <React.Fragment>
                <div style={{ ...style, height: "90px" }}>
                    {this.getTabes()}
                </div>
                <div style={style}>
                    <Left />
                    {this.state.value === 0 && <JavascriptVisualEditor {...this.props} defaultValue={example} name="Code.js" />}
                    {this.state.value === 1 && <MarkdownVisualEditor {...this.props} defaultValue={readme} name="README.md" />}
                </div>
            </React.Fragment >
        );
    }
};
