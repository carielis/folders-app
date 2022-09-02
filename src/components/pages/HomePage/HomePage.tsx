import { FC, useState } from "react";
import { foldersApi } from "../../../utils";
import { MiniFolderSvg, PeopleSvg } from "../../svg";
import { TriangleSvg } from "../../svg/TriangleSvg";
import { RenderItem } from "../../ui";
import styles from "./styles.module.css";

export const HomePage: FC = () => {
  const [state] = useState(foldersApi);
  const [countFile, setCount] = useState(0);

  return (
    <>
      {state.folder.map((main, index) => {
        return (
          <>
            <title>FOLDERS</title>
            <div key={index + 1} className={styles.item}>
              <TriangleSvg isOpen={true} /> <MiniFolderSvg /> {main.title}
            </div>
            <div>
              <PeopleSvg /> Menu item {countFile}
            </div>
            {main.folders.map((item) => {
              return (
                <>
                  <RenderItem item={item} />
                </>
              );
            })}
          </>
        );
      })}
    </>
  );
};
