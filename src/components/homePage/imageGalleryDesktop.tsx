import styles from "./imageGalleryDesktop.module.scss";
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

export function ImageGalleryDesktop({
  imageGalleryArray,
  currentPage,
  nextPageHandler,
  previousPageHandler,
  goToPageHandler,
  totalItems,
}: imageGalleryProps) {
  const multiplePages = totalItems > imageGalleryArray.length;
  const numberOfPages = Math.ceil(totalItems / 3);

  return (
    <div>
      <div className={styles["ig-container"]}>
        {multiplePages && (
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
        )}
        <div className={styles["image-gallery"]}>
          {imageGalleryArray.map((item) => (
            <SingleItemCard key={item.id} item={item} />
          ))}
        </div>
        {multiplePages && (
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
        )}
      </div>
      {multiplePages && (
        <DotPaginator
          currentPage={currentPage}
          goToPageHandler={goToPageHandler}
          totalItems={numberOfPages}
        />
      )}
    </div>
  );
}
