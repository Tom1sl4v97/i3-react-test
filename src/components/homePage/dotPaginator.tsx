import styles from "./dotPaginator.module.scss";

type DotPaginatorProps = {
  currentPage: number;
  goToPageHandler: (page: number) => void;
  totalItems: number;
};

export function DotPaginator({
  currentPage,
  goToPageHandler,
  totalItems,
}: DotPaginatorProps) {
  const dots = Array.from({ length: totalItems }, (_, index) => (
    <div
      key={index}
      className={`${styles.dot} ${currentPage === index + 1 ? styles.active : ""}`}
      onClick={() => goToPageHandler(index + 1)}
    ></div>
  ));

  return <div className={styles["dot-container"]}>{dots}</div>;
}
