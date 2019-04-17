import Document from "../models/document";

type Documents = {
    [key: string]: Document
}

export interface StoreState {
    activated: string;
    documents: Documents;
}
