import Document, { documentBuilder } from "../../../models/document";
import Collection from "../../../models/collection";

// npm i -D @types/webpack-env
const readmeContent = require.context(`!raw-loader!./`, false, /\.md$/, )("./README.md").default;
const codeContent = require.context(`!raw-loader!./`, false, /\.txt$/, )("./code.txt").default
const readmeDoc: Document = documentBuilder("README.md", readmeContent, "basic", "tree");
const codeDoc: Document = documentBuilder("Code.js", codeContent, "basic", "tree");

const collection: Collection = {
    name: "tree",
    documents: {
        "README.md": readmeDoc,
        "Code.js": codeDoc,
    }
}

export default collection;
