// Basic writable document
import Code from "./code";

type Document = Code & {
    name: string;
    categoryName: string;
    collectionName: string;
    extension: string | undefined;
    id: string;
}

export default Document

export const documentBuilder = (
    name: string,
    content: string,
    categoryName: string,
    collectionName: string
): Document => ({
    name,
    content,
    categoryName,
    collectionName,
    id: `${categoryName}-${collectionName}-${name}`,
    extension: name.split(".").pop()
});
