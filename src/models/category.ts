// A group of collections
import Iterable from "../interfaces/iterable";
import Iterator from "../interfaces/iterator";
import ArrayIterator from "../interfaces/array-iterator";
import Collection from "./collection";

export default class implements Iterable<Collection>{
    name: string;
    private readonly collections: { [collectionName: string]: Collection };

    constructor(name: string) {
        this.name = name;
        this.collections = {};
    }

    getCollection(name: string): Collection {
        return this.collections[name];
    }

    addCollection(collection: Collection) {
        if (this.collections[collection.name]) {
            throw new Error(`name ${collection.name} already exist`);
        } else {
            this.collections[collection.name] = collection;
        }
    }

    iterator(): Iterator<Collection> {
        return new ArrayIterator(Object.values(this.collections));
    }
}
