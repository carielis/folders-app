import { fileType } from "./fileType";

export type folderType = {
    title: string;
    folders: folderType[];
    files: fileType[];
};