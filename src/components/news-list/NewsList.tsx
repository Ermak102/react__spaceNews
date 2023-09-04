import { FC, useEffect, useState } from "react";
import NewsItem from "../news-item/NewsItem";
import { INews } from "../../store/articles-slice/Article.model";

import styles from "./NewsList.module.scss";
import ErrorModal from "../UI/error/ErrorModal";
import { useAppDispatch } from "../../hooks/store";
import { articleSlice } from "../../store/articles-slice/Article.slice";
import Loader from "../UI/loaderr/Rocket/Loader";
import Pagination from "../UI/Pagination/Pagination";
import { fetchArticle } from "../../store/articles-slice/Article.action";

const STORE_PAGE_NAME = "news";
const STORE_PAGE_SET_NAME = "pageSet";

interface INewsList {
  news: INews[];
  isLoading: boolean;
  error: string | null;
  articlesCount: number;
  limitItem: number;
}

const NewsList: FC<INewsList> = ({
  news,
  isLoading,
  error,
  articlesCount,
  limitItem,
}) => {
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [firstPage, setFirstPage] = useState(1);

  const handleHideError = () => {
    dispatch(articleSlice.actions.clearingError());
  };

  useEffect(() => {
    setFromStorePage();
    setFromStorePageSet();
  }, []);

  const setFromStorePage = () => {
    const storePage = localStorage.getItem(STORE_PAGE_NAME);
    if (storePage == null) return;

    setCurrentPage(parseInt(storePage));
  };

  const setFromStorePageSet = () => {
    const storePageSet = localStorage.getItem(STORE_PAGE_SET_NAME);
    if (storePageSet == null) return;

    setFirstPage(parseInt(storePageSet));
  };

  useEffect(() => {
    localStorage.setItem(STORE_PAGE_NAME, currentPage.toString());
    changeNewsSet(currentPage * limitItem);
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem(STORE_PAGE_SET_NAME, firstPage.toString());
  }, [firstPage]);

  const changeNewsSet = (offset: number) => {
    dispatch(fetchArticle(limitItem, offset));
  };

  console.log(news.length, limitItem);

  return (
    <section>
      <ul className={styles.list}>
        {news.length > 0 &&
          !isLoading &&
          news.map((item) => <NewsItem key={item.id} news={item} />)}
      </ul>

      {!isLoading && !error && news.length >= limitItem && (
        <Pagination
          limitItemInPage={limitItem}
          count={articlesCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          firstPage={firstPage}
          setFirstPage={setFirstPage}
        />
      )}

      {isLoading && <Loader />}

      {!news.length && !isLoading && (
        <div className={styles.none}> Новостей нет </div>
      )}

      {error && <ErrorModal error={error} hideError={handleHideError()} />}
    </section>
  );
};

export default NewsList;
