"use client";

import { useFetchDataContentful2Page } from "@/hooks/fetchDataContentful";

import styles from "./page.module.scss";
import { NavigationHandler } from "@/components/navigation/navigationHandler";
import { Loader } from "@/components/loader/loader";
import { ErrorMsg } from "@/components/errorMsg/errorMsg";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IncludedContent } from "@/components/financialHighlights/includedContent";

export default function Page() {
  const { loading, data, error } = useFetchDataContentful2Page();

  return (
    <div>
      <NavigationHandler />

      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMsg errorMsg={error} />
      ) : (
        <div className={styles["master-container"]}>
          <div className={styles["container-title"]}>
            <div className={styles.column}>
              <div className={styles.title}>{data?.title}</div>
            </div>
            <div className={styles.column}>
              <div className={styles.content}></div>
            </div>
          </div>

          <div className={styles["container-content"]}>
            <div className={styles.column}>
              <div className={styles["image-container"]}>
                <div className={styles.image}>
                  <img
                    src={data?.titleImage}
                    alt=""
                    width="100%"
                    height="auto"
                  />
                </div>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles["text-container"]}>
                <div className={styles.text}>
                  {documentToReactComponents(data.firstText as any)}
                </div>
                <IncludedContent />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
