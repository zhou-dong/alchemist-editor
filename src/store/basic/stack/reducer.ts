import Action from "../../action";
import { Doc } from "../../../models/document";
import Document from "../../../models/document";
import { StoreState } from "../../";

// npm i -D @types/webpack-env
const readmeContent = require.context(`!raw-loader!./`, false, /\.md$/, )("./README.md").default;
const codeContent = require.context(`!raw-loader!./`, false, /\.txt$/, )("./code.txt").default
const readmeDoc = new Doc("README.md", readmeContent, "basic", "stack");
const codeDoc = new Doc("Code.js", codeContent, "basic", "stack");

let documents: { [key: string]: Document } = {};
documents[readmeDoc.id] = readmeDoc;
documents[codeDoc.id] = codeDoc;

const initialState: StoreState = {
    activated: codeDoc.id,
    documents: documents,
};

const reducer = (state: StoreState = initialState, action: Action): StoreState => {
    if (action && action.payload && action.payload.id) {
        return { ...state, activated: action.payload.id };
    } else {
        return state;
    }
}

export default reducer;
