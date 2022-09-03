import React, { FC, Fragment, useCallback, useState } from "react";

import { fileType } from "../../../utils/types/fileType";
import { folderType } from "../../../utils/types/folderType";

import { File } from "../File/Fille";
import { Folder } from "../Folder/Folder";

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
          <div className={styles.block} key={folder.id}>
            <ol>
              <Folder
                folder={folder.title}
                isOpen={isOpen}
                handleOpen={handleOpen}
              />
              {isOpen && (
                <ol>
                  <RenderItem item={folder} />
                  {folder.files.map((file: fileType, index: number) => (
                    <Fragment key={file.id}>
                      <File file={file} />
                    </Fragment>
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
