import React, { ReactNode } from "react";
import Resizable from "re-resizable";
import Chip from "@material-ui/core/Chip";
import Code from "@material-ui/icons/Code";
import Add from "@material-ui/icons/Add";
import Cached from "@material-ui/icons/Cached";
import PlayArrow from "@material-ui/icons/PlayArrow";
import { AceEditorProps } from "react-ace";
import Editor from "../../../components/Editor";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { getMode } from "../../../utils/fileUtils";

interface Props extends AceEditorProps {
    play?: () => any;
    handleSwitch: () => any;
    name: string;
    value: string;
    defaultValue: string;
}

const styles = {
    layout: {
        flex: 2,
        height: "100%",
        // overflow: "scroll",
        // backgroundColor: "#002B36"
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
        // borderBottom: "1px solid #586e75",
        // minWidth: "500px",
        overflow: "hidden"
    },
};

const createChip = (SvgIcon: React.ComponentType<SvgIconProps>, label?: string, handleClick?: () => any) => (
    <Chip avatar={<SvgIcon style={styles.icon} />}
        style={styles.chip as React.CSSProperties}
        label={label}
        onClick={handleClick}
    />
);

export default (props: Props) => (
    <Resizable enable={{ left: true }}>
        <aside style={styles.layout}>
            <nav style={styles.nav}>
                {createChip(Code)}
                {createChip(Add, props.name)}
                {getMode(props.name) === "javascript" && createChip(PlayArrow, "", props.play)}
                {createChip(Cached, "", props.handleSwitch)}
            </nav>
            <Editor {...props} mode={getMode(props.name)} />
        </aside>
    </Resizable>
);
