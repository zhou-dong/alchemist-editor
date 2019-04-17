import { Action as ReduxAction } from "redux";
import Document from "../models/document";

export const collectionClick = "collection-click";
export const documentNameClick = "document-name-click";

export default interface Action extends ReduxAction<string> {
    type: string;
    payload: Document;
}
