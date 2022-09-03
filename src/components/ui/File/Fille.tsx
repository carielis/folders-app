import { FC } from "react";

import { fileType } from "../../../utils/types/fileType";

import { FileSvg } from "../../svg";

import styles from "./styles.module.css";

interface Props {
  file: fileType;
}

export const File: FC<Props> = ({ file }) => (
  <ol className={styles.block} id="file">
    <FileSvg /> {file.title}
  </ol>
);
