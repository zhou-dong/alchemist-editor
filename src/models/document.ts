// Basic writable document
import Code from "./code";

export default interface Document extends Code {
    name: string;
    content: string;
    categoryName: string;
    collectionName: string;
    extension(): string | undefined;
    id: string;
}

export class Doc implements Document {
    name: string;
    content: string;
    categoryName: string;
    collectionName: string;
    id: string;

    constructor(name: string, content: string, categoryName: string, collectionName: string) {
        this.name = name;
        this.content = content;
        this.collectionName = collectionName;
        this.categoryName = categoryName;
        this.id = `${this.categoryName}-${this.collectionName}-${this.name}`;
    }

    extension(): string | undefined {
        return this.name.split(".").pop();
    }
}
