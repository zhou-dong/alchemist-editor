// A group of collections
import Collection from "./collection";

type Category = {
    name: string;
    collections: { [collectionName: string]: Collection };
}

export default Category;
