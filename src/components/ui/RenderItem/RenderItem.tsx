import { FC, useCallback, useState } from "react";

import { fileType } from "../../../utils/types/fileType";
import { folderType } from "../../../utils/types/folderType";

import { FolderSvg, TriangleSvg } from "../../svg";
import { File } from "../File/Fille";

import styles from "./styles.module.css";

interface Props {
  item: folderType;
}

export const RenderItem: FC<Props> = ({ item }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(!isOpen), [isOpen]);

  return (
    <>
      {item?.folders?.map((folder: folderType, index: number) => {
        return (
          <div className={styles.block} key={index + index + 3}>
            <ol>
              <div className={styles.block} id="folder" onClick={handleOpen}>
                <TriangleSvg isOpen={isOpen} />
                <FolderSvg /> {folder.title}
              </div>
              {isOpen && (
                <ol>
                  <RenderItem item={folder} />
                  {folder.files.map((file: fileType, index: number) => (
                    <>
                      <File file={file} />
                    </>
                  ))}
                </ol>
              )}
            </ol>
          </div>
        );
      })}
    </>
  );
};
