import React from "react";
import Resizable from "re-resizable";
import Chip from "@material-ui/core/Chip";
import Code from "@material-ui/icons/Code";
import Add from "@material-ui/icons/Add";
import PlayArrow from "@material-ui/icons/PlayArrow";

import Editor, { Props as EditorProps } from "../../../components/Editor";

interface Props extends EditorProps {
    execute: () => any;
}

const styles = {
    layout: {
        flex: 1,
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#002B36"
    },
    icon: {
        width: 20,
        height: 20,
    },
    chip: {
        color: "#93A1A1",
        backgroundColor: "transparent",
        fontFamily: "'Courier New', Menlo, Monaco, monospace",
    },
    nav: {
        borderBottom: "1px solid #586e75",
        minWidth: "500px",
    },
};

export default (props: Props) => (
    <Resizable enable={{ left: true }}>
        <aside style={styles.layout}>
            <nav style={styles.nav}>
                <Chip
                    avatar={<Code style={styles.icon} />}
                    label="code.js"
                    style={styles.chip as React.CSSProperties}
                />
                <Chip
                    avatar={<Code style={styles.icon} />}
                    label="README.md"
                    style={styles.chip as React.CSSProperties}
                />
                <Chip
                    avatar={<Add style={styles.icon} />}
                    label=""
                    style={styles.chip as React.CSSProperties}
                />
                <Chip
                    avatar={<PlayArrow style={styles.icon} />}
                    label=""
                    style={styles.chip as React.CSSProperties}
                    onClick={props.execute}
                />
            </nav>
            <Editor {...props} />
        </aside>
    </Resizable>
);
