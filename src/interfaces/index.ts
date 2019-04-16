export interface IFolder {
    folder: string;
}

export interface IProject {
    project: string;
}

export interface IFile {
    file: string;
}

export type IFileLocation = IFolder & IProject & IFile;

export interface ICode {
    code: string;
}

export interface IVisualBoard {
    visualBoardId: string;
}
