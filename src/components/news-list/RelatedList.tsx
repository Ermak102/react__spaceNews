import React, { FC, useState } from "react";
import { INews } from "../../store/articles-slice/Article.model";
import NewsItem from "../news-item/NewsItem";
import Pagination from "../UI/Pagination/Pagination";
import Loader from "../UI/loaderr/Rocket/Loader";
import ErrorModal from "../UI/error/ErrorModal";
import { useAppDispatch } from "../../hooks/store";
import { articleSlice } from "../../store/articles-slice/Article.slice";

import styles from "./NewsList.module.scss";

interface IRelatedList {
  limitItems: number;
  items: INews[];
  isLoading: boolean;
  error: string | null;
  articlesCount: number;
}

const RelatedList: FC<IRelatedList> = ({
  limitItems,
  items,
  isLoading,
  error,
  articlesCount,
}) => {
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [firstPage, setFirstPage] = useState(1);

  const handleHideError = () => {
    dispatch(articleSlice.actions.clearingError());
  };

  const getItems = () => {
    const firstItem = currentPage * limitItems - limitItems;
    return items.slice(firstItem, currentPage * limitItems);
  };

  return (
    <section>
      <ul className={styles.list}>
        {getItems().length > 0 &&
          !isLoading &&
          getItems().map((item) => <NewsItem key={item.id} news={item} />)}
      </ul>

      {!isLoading && !error && articlesCount > limitItems && (
        <Pagination
          limitItemInPage={limitItems}
          count={articlesCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          firstPage={firstPage}
          setFirstPage={setFirstPage}
        />
      )}

      {isLoading && <Loader />}

      {!items.length && !isLoading && (
        <div className={styles.none}> Новостей нет </div>
      )}

      {error && <ErrorModal error={error} hideError={handleHideError()} />}
    </section>
  );
};

export default RelatedList;
