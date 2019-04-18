import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import StoreState from "../store/state";
import Document from "../models/document";
import Collection from "../models/collection";
import Category from "../models/category";
import Action, { documentNameOnClickActionBuilder } from "../store/action";

let { Treebeard } = require("react-treebeard");

interface TreeNode {
    name: string;
    toggled: boolean;
    children?: TreeNode[];
    document?: Document;
}

const createTreeNodeByDocument = (document: Document): TreeNode => ({
    name: document.name, toggled: false, document: document,
});

const createTreeNodeByCollection = (collection: Collection): TreeNode => ({
    name: collection.name,
    toggled: true,
    children: Object.values(collection.documents).map(createTreeNodeByDocument)
});

const createTreeNodeByCategory = (category: Category): TreeNode => ({
    name: category.name,
    toggled: true,
    children: Object.values(category.collections).map(createTreeNodeByCollection)
});

const createTreeNodes = (storeState: StoreState): TreeNode[] => {
    return Object.values(storeState.categories).map(createTreeNodeByCategory)
}

const createTrees = ({ storeState, onToggle }: Props) => {
    return createTreeNodes(storeState).map((node, i) => <Treebeard key={i} data={node} onToggle={onToggle} />);
}

interface Props {
    storeState: StoreState;
    onToggle: (node: TreeNode, toggled: boolean) => any;
}

const NavTree = (props: Props) => (
    <React.Fragment>
        {createTrees(props)}
    </React.Fragment>
);

const mapStateToProps = (storeState: StoreState) => ({ storeState });

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    onToggle: (node: TreeNode, toggled: boolean) => {
        if (node.document) {
            dispatch(documentNameOnClickActionBuilder(node.document))
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavTree);
