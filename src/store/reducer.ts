import Action, { ActionTypes } from "./action";
import StoreState from "./state";
import Category from "../models/category";

import basicStack from "./basic/stack";
import basicQueue from "./basic/queue";
import basicTree from "./basic/tree";

const basicCategory: Category = {
    name: "basic",
    collections: {
        "stack": basicStack,
        "queue": basicQueue,
        "tree": basicTree,
    }
}

const initialState: StoreState = {
    activated: basicTree.documents["Code.js"],
    categories: {
        "basic": basicCategory
    },
};

export default (state: StoreState = initialState, action: Action): StoreState => {
    switch (action.type) {
        case ActionTypes.DocumentNameOnClick:
            return { ...state, activated: action.payload.target };
        case ActionTypes.EditorOnChange: {
            const newState = { ...state };
            newState.activated.content = action.payload.value;
            return newState;
        }
        default: return state;
    }
}
