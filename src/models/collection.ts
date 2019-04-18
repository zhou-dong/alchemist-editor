// Collection of documents
import Document from "./document";

type Collection = {
    name: string;
    documents: { [docName: string]: Document };
}

export default Collection;
