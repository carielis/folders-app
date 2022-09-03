import { FC, useEffect, useState } from "react";

import { fileType } from "../../../utils/types/fileType";
import { folderType } from "../../../utils/types/folderType";

import { MiniFolderSvg, PeopleSvg } from "../../svg";
import { Folder, RenderItem } from "../../ui";

import styles from "./styles.module.css";

type isOpenType = {
  [key: string]: boolean;
};

type mainFolder = {
  countFiles: number;
  folders: folderType[];
  id: number;
  title: string;
  files: fileType[];
};

interface Props {
  data: {
    folder: mainFolder[];
  };
}

export const HomePage: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState<isOpenType>({});

  useEffect(() => {
    props.data.folder.forEach((folder) => {
      folder.folders.forEach((folders) =>
        setIsOpen((prev) => ({ ...prev, [folders.title]: false }))
      );
    });
  }, [props.data.folder]);

  return (
    <div>
      {props.data.folder.map((main) => {
        return (
          <div key={main.id}>
            <title>FOLDERS</title>
            <div className={styles.mainFolder}>
              <MiniFolderSvg /> {main.title}
            </div>
            <div className={styles.menuItem}>
              <PeopleSvg /> Menu item {main.countFiles}
            </div>
            {main.folders.map((item) => {
              return (
                <div key={item.id}>
                  <ol>
                    <Folder
                      folder={item.title}
                      isOpen={isOpen[item.title]}
                      handleOpen={() =>
                        setIsOpen({
                          ...isOpen,
                          [item.title]: !isOpen[item.title],
                        })
                      }
                    />
                    {isOpen[item.title] && <RenderItem item={item} />}
                  </ol>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
