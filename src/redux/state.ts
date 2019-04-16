import { Props as HeaderProps } from "../components/Header";
import { Props as EditorProps } from "../components/Editor";
import { Props as ExecutorsProps } from "../components/Executors";
import { IFolder, IProject, IFile } from "../interfaces";

export type FileState = IFolder & IProject & IFile & {
    headerProps: HeaderProps;
    executorsProps: ExecutorsProps;
    editorProps: EditorProps;
};

export type ProjectState = IFolder & IProject & {
    [file: string]: FileState
};

export type FolderState = IFolder & {
    [project: string]: ProjectState
};

export type StoreState = {
    [folder: string]: FolderState
};

export const getFileState = (storeState: StoreState, ownProps: IFolder & IProject & IFile): FileState => {
    const folderState: FolderState = storeState[ownProps.folder];
    const projectState: ProjectState = folderState[ownProps.project];
    return projectState[ownProps.file];
}

// export default {
//     folders: []
// } as StoreState
