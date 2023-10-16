import { useFetchDataContentful2PageIncluded } from "@/hooks/fetchDataContentful";
import { useEffect, useState, useRef } from "react";

import styles from "./includedContent.module.scss";
import { ErrorMsg } from "../errorMsg/errorMsg";
import { Loader } from "../loader/loader";
import { SingleContent } from "./singleContent";

export function IncludedContent() {
  const { loading, data, error } = useFetchDataContentful2PageIncluded();

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMsg errorMsg={error} />
      ) : (
        <div className={styles["container-animation"]}>
          {data?.map((item) => (
            <SingleContent
              key={item.id}
              image={item.image}
              includedContent={item.includedContent}
            />
          ))}
        </div>
      )}
    </div>
  );
}
