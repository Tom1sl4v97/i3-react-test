import styles from "./imageGalleryMobile.module.scss";

import { SingleItemCard } from "./singleItemCard";
import { DotPaginator } from "./dotPaginator";

type imageGalleryProps = {
  imageGalleryArray: any[];
  currentPage: number;
  nextPageHandler: () => void;
  previousPageHandler: () => void;
  goToPageHandler: (pageNumber: number) => void;
  totalItems: number;
};

export function ImageGalleryMobile({
  imageGalleryArray,
  currentPage,
  nextPageHandler,
  previousPageHandler,
  goToPageHandler,
  totalItems,
}: imageGalleryProps) {
  return (
    <div>
      <div className={styles["image-gallery"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          cursor={"pointer"}
          onClick={previousPageHandler}
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        <SingleItemCard item={imageGalleryArray[0]} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          cursor={"pointer"}
          onClick={nextPageHandler}
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>

      <DotPaginator
        currentPage={currentPage}
        goToPageHandler={goToPageHandler}
        totalItems={totalItems}
      />
    </div>
  );
}
