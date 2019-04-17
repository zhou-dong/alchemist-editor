import React from "react";
import Resizable from "re-resizable";
import { Dispatch } from "redux";
import Chip from "@material-ui/core/Chip";
import Code from "@material-ui/icons/Code";
import { connect } from "react-redux";
import Editor from "../../../components/Editor";
import { StoreState } from "../../../store";
import Document from "../../../models/document";
import Action from "../../../store/action";
import { documentNameClickActionBuilder } from "../../../store/helper";

const styles = {
    layout: {
        flex: 2,
        height: "100%",
        overflow: "scroll",
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
        minWidth: "500px",
        overflow: "hidden",
        backgroundColor: "#01313f",
    },
};

type Documents = {
    [key: string]: Document;
}

type Props = {
    documents: Documents;
    handleClick: (document: Document) => any;
}

type FileNameProps = {
    document: Document;
    handleClick: (document: Document) => any;
}
const FileName = ({ document, handleClick }: FileNameProps) => (
    <Chip
        avatar={<Code style={styles.icon} />}
        style={styles.chip}
        label={document.name}
        onClick={() => handleClick(document)}
        variant="default"
    />
);

const mapStateToProps = (storeState: StoreState) => ({
    documents: storeState.documents
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    handleClick: (document: Document) => dispatch(documentNameClickActionBuilder(document))
});

const NavBar = (props: Props) => (
    <nav style={styles.nav}>
        {Object.values(props.documents).map(value => <FileName document={value} handleClick={props.handleClick} />)}
    </nav>
);

const ConnectedNavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default () => (
    <Resizable enable={{ left: true }}>
        <aside style={styles.layout}>
            <ConnectedNavBar />
            <Editor />
        </aside>
    </Resizable>
);
