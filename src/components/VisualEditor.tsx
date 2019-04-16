import React from "react";
import Resizable from "re-resizable";
import ReactMarkdown from "react-markdown";
import Chip from "@material-ui/core/Chip";
import Code from "@material-ui/icons/Code";

import { SvgIconProps } from "@material-ui/core/SvgIcon";

import { AceEditorProps } from "react-ace";
import Editor from "./Editor";
import Executor from "./Executor";

const styles = {
    main: {
        flex: 2,
        overflow: "scroll",
        backgroundColor: "#586e75",
        color: "palegoldenrod",
        // height: "100%"
    },
    aside: {
        flex: 2,
        height: "100%",
    },
    icon: {
        width: 20,
        height: 20,
    },
    chip: {
        color: "#93A1A1",
        // backgroundColor: "transparent",
        backgroundColor: "#002B36",
        fontFamily: "'Courier New', Menlo, Monaco, monospace",
        borderRadius: "unset",
        height: "30px",
    },
    nav: {
        // borderBottom: "1px solid #586e75",
        // minWidth: "500px",
        height: "10%",
        overflow: "hidden"
    },
    editor: {
        height: "90%",
        overflow: "hidden",
        width: "100%",
    }
};

// styles.chip as React.CSSProperties
interface Props extends AceEditorProps { }

interface State {
    content: string;
}

type SvgIcon = React.ComponentType<SvgIconProps>;
const getChip = (Icon: SvgIcon, label?: string, handleClick?: () => any) => (
    <Chip
        avatar={<Icon style={styles.icon} />}
        style={styles.chip} label={label}
        onClick={handleClick}
        variant="default"
    />
);

class AbstractEditor extends React.Component<Props, State> {
    public readonly state = {
        content: this.props.defaultValue || ""
    };

    protected readonly handleChange = (newContent: string) => {
        this.setState({ content: newContent });
    };

    protected readonly getEditor = (mode: string) => (
        <Editor
            {...this.props}
            mode={mode}
            folder="example"
            project="stack"
            file="code.js"
            onChange={this.handleChange}
            code={this.state.content}
            style={styles.editor}
        />
    );
}

export class JavascriptVisualEditor extends AbstractEditor {
    render() {
        return (
            <React.Fragment>
                <main style={styles.main} id="visual"></main>
                {/* <div style={{ minWidth: "40%" }}> */}
                <Resizable enable={{ left: true }} style={{ minWidth: "40%", border: "1px solid green" }}>
                    <aside style={styles.aside}>
                        <nav style={styles.nav}>
                            {getChip(Code, this.props.name)}
                        </nav>
                        <Executor code={this.state.content} />
                        {this.getEditor("javascript")}
                    </aside>
                </Resizable>
                {/* </div> */}
            </React.Fragment>
        );
    }
}

export class MarkdownVisualEditor extends AbstractEditor {
    render() {
        return (
            <React.Fragment>
                <main style={styles.main}><ReactMarkdown source={this.state.content} /></main>
                <Resizable enable={{ left: true }}>
                    <aside style={styles.aside}>
                        <nav style={styles.nav}>
                            {getChip(Code, this.props.name)}
                        </nav>
                        {this.getEditor("markdown")}
                    </aside>
                </Resizable>
            </React.Fragment>
        );
    }
}
