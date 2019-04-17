import Document from "../models/document";
import { collectionClick, documentNameClick } from "./action";

export const actionBuilder = (prefix: string, document: Document) => ({
    type: `${prefix}-${document.id}`,
    payload: document,
});

export const collectionClickActionBuilder = (document: Document) => {
    return actionBuilder(collectionClick, document);
};

export const documentNameClickActionBuilder = (document: Document) => {
    return actionBuilder(documentNameClick, document);
};
