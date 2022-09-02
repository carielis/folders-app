import { FC } from "react";

import { FolderSvg, TriangleSvg } from "../../svg";

import styles from "./styles.module.css";

interface Props {
  folder: string;
  isOpen: boolean;
  handleOpen: () => void;
}

export const Folder: FC<Props> = ({ folder, isOpen, handleOpen }) => (
  <ul className={styles.block} id="folder" onClick={handleOpen}>
    <TriangleSvg isOpen={isOpen} />
    <FolderSvg /> {folder}
  </ul>
);
