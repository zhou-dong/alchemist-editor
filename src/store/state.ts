import Document from "../models/document";
import Category from "../models/category";

type StoreState = {
    activated: Document;
    categories: { [categoryName: string]: Category };
}

export default StoreState;
