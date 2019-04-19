import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import StoreState from "../store/state";
import Document from "../models/document";
import Collection from "../models/collection";
import Category from "../models/category";
import Action, { documentNameOnClickActionBuilder } from "../store/action";
import "../../node_modules/react-treeview/react-treeview.css"; 
import "./Nav.css";

import TreeView from "react-treeview";

const createTreeNodeByDocument = (document: Document, onDocumentClick: (document: Document) => any) => (
    <div key={document.id} onClick={() => onDocumentClick(document)}>
        {document.name}
    </div>
);

const createTreeNodeByCollection = (
    collection: Collection,
    activated: Document,
    onDocumentClick: (document: Document) => any
) => {
    const collapsed: boolean = activated.collectionName !== collection.name;
    return (
        <TreeView nodeLabel={collection.name} key={collection.name} defaultCollapsed={collapsed}>
            {Object.values(collection.documents)
                .map(document => createTreeNodeByDocument(document, onDocumentClick))}
        </TreeView>
    );
}

const createTreeNodeByCategory = (
    category: Category,
    activated: Document,
    onDocumentClick: (document: Document) => any
) => {
    const collapsed: boolean = (activated.categoryName !== category.name);
    return (
        <TreeView nodeLabel={category.name} key={category.name} defaultCollapsed={collapsed}>
            {Object.values(category.collections)
                .map(coll => createTreeNodeByCollection(coll, activated, onDocumentClick))}
        </TreeView>
    );
}

const createTreeNodes = (storeState: StoreState, onDocumentClick: (document: Document) => any) => (
    Object.values(storeState.categories)
        .map(category => createTreeNodeByCategory(category, storeState.activated, onDocumentClick))
)

interface Props {
    storeState: StoreState;
    onDocumentClick: (document: Document) => any;
}

const createTrees = ({ storeState, onDocumentClick }: Props) => {
    return createTreeNodes(storeState, onDocumentClick);
}

const NavTree = (props: Props) => (
    <React.Fragment>
        {createTrees(props)}
    </React.Fragment>
);

const mapStateToProps = (storeState: StoreState) => ({ storeState });

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    onDocumentClick: (document: Document) => dispatch(documentNameOnClickActionBuilder(document))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavTree);
