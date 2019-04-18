import React from "react";
import Resizable from "re-resizable";
import { Dispatch } from "redux";
import Chip from "@material-ui/core/Chip";
import Code from "@material-ui/icons/Code";
import { connect } from "react-redux";
import Editor from "../../../components/Editor";
import StoreState from "../../../store/state";
import Document from "../../../models/document";
import Action, { documentNameOnClickActionBuilder } from "../../../store/action";

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

type Props = {
    document: Document;
    handleClick: (document: Document) => any;
}

const FileName = ({ document, handleClick }: Props) => (
    <Chip
        avatar={<Code style={styles.icon} />}
        style={styles.chip}
        label={document.name}
        onClick={() => handleClick(document)}
        variant="default"
    />
);

const mapStateToProps = (storeState: StoreState) => ({
    document: storeState.activated
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    handleClick: (document: Document) => dispatch(documentNameOnClickActionBuilder(document))
});

class NavBar extends React.Component<Props, {}>{

    private size = 3;
    private documents: { [docId: string]: Document } = {};

    render() {
        const { document, handleClick } = this.props;
        if (!this.documents[document.id]) {
            const documentsLength = Object.keys(this.documents).length
            if (documentsLength === this.size) {
                delete this.documents[Object.keys(this.documents)[0]]
            }
            this.documents[document.id] = document;
        }
        const names = Object
            .values(this.documents)
            .map((value, index) => <FileName key={index} document={value} handleClick={handleClick} />)
        return (
            <nav style={styles.nav} >
                {names}
            </nav>
        );
    };
}

const ConnectedNavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default () => (
    <Resizable enable={{ left: true }}>
        <aside style={styles.layout}>
            <ConnectedNavBar />
            <Editor />
        </aside>
    </Resizable>
);
