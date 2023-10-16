import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useRef } from "react";
import { useIsInViewport } from "../../hooks/isInViewport";

import styles from "./singleContent.module.scss";

type SingleContentProps = {
  image: string;
  includedContent: {};
};

export function SingleContent({ image, includedContent }: SingleContentProps) {
  const ref1 = useRef(null);
  const isInViewport1 = useIsInViewport(ref1);

  return (
    <div className={styles["master-container"]}>
      <div
        className={`${styles["container"]} ${
          isInViewport1 ? styles.visible : ""
        }`}
        ref={ref1}
      >
        <div className={styles.image}>
          <div className={styles["image-container"]}>
            <img src={image} alt="image" className={styles.image} />
          </div>
        </div>
        <div className={styles.text}>
          {documentToReactComponents(includedContent as any)}
        </div>
      </div>
    </div>
  );
}
