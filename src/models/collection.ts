// Collection of documents
import Iterable from "../interfaces/iterable";
import Iterator from "../interfaces/iterator";
import ArrayIterator from "../interfaces/array-iterator";
import Document from "./document";

export default class implements Iterable<Document>{
    name: string;
    private readonly documents: { [docName: string]: Document };

    constructor(name: string) {
        this.name = name;
        this.documents = {};
    }

    getDoc(name: string): Document {
        return this.documents[name];
    }

    addDoc(document: Document) {
        if (this.documents[document.name]) {
            throw new Error(`name ${document.name} already exist`);
        } else {
            this.documents[document.name] = document;
        }
    }

    iterator(): Iterator<Document> {
        return new ArrayIterator(Object.values(this.documents));
    }
}
