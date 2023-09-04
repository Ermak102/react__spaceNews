import React, { FC, useMemo } from "react";
import styles from "./Pagination.module.scss";

interface IPagination {
  count: number;
  limitItemInPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  firstPage: number;
  setFirstPage: (page: number) => void;
}

const Pagination: FC<IPagination> = ({
  count,
  limitItemInPage,
  currentPage,
  setCurrentPage,
  firstPage,
  setFirstPage,
}) => {
  const limitPages = 10;

  const countPages = Math.ceil(count / limitItemInPage);

  const getPagesArray = useMemo(
    () =>
      new Array(countPages)
        .fill(" ")
        .map((_, index) => index)
        .slice(firstPage, firstPage + limitPages),
    [firstPage, countPages]
  );

  const nextPage = () => {
    if (isNextPage) return;

    setFirstPage(firstPage + limitPages);
  };

  const isNextPage = getPagesArray[getPagesArray.length - 1] === countPages - 1;

  const previousPage = () => {
    if (isPreviousPage) return;

    setFirstPage(firstPage - limitPages);
  };

  const isPreviousPage = firstPage - limitPages <= 0;

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.pagination}>
      <div className="container">
        <div className={styles.wrapper}>
          <button
            className={"button " + styles.button}
            disabled={isPreviousPage}
            onClick={() => previousPage()}
          >
            Previous
          </button>
          <div className={styles.wrapper}>
            {getPagesArray.map((page) => (
              <div
                className={page === currentPage ? styles.active : styles.page}
                key={page}
                onClick={() => changePage(page)}
              >
                {page}
              </div>
            ))}
          </div>
          <button
            className={"button " + styles.button}
            disabled={isNextPage}
            onClick={() => nextPage()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
