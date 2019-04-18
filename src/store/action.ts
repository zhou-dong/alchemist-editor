import { Action as ReduxAction } from "redux";
import Document from "../models/document";

export enum ActionTypes {
    DocumentNameOnClick,
    EditorOnChange
}

export type Payload<T = any> = {
    target: Document;
    value?: T;
}

export default interface Action<T = any> extends ReduxAction<ActionTypes> {
    type: ActionTypes;
    payload: Payload<T>;
}

function actionBuilder<T = any>(type: ActionTypes, target: Document, value?: T): Action<T> {
    return { type, payload: { target, value } }
}

export const documentNameOnClickActionBuilder = (target: Document): Action => {
    return actionBuilder(ActionTypes.DocumentNameOnClick, target);
}

export function editorOnChangeActionBuilder(target: Document, value: string): Action<string> {
    return actionBuilder<string>(ActionTypes.EditorOnChange, target, value);
}
