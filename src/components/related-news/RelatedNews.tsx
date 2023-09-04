import React, { FC, useEffect } from "react";
import NewsList from "../news-list/NewsList";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { fetchArticle } from "../../store/articles-slice/Article.action";

import styles from "./RelatedNews.module.scss";
import RelatedList from "../news-list/RelatedList";

interface IRelatedNews {
  currentId: number;
  publisher: string;
}

const LIMIT = 3;
const LIMIT_QUERY = 150;

const RelatedNews: FC<IRelatedNews> = ({ publisher, currentId }) => {
  const { news, isLoading, error } = useAppSelector((state) => state.articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticle(LIMIT_QUERY));
  }, [dispatch]);

  const getRelatedNews = () => {
    return news.results.filter(
      (item) => item.news_site === publisher && item.id !== currentId
    );
  };

  return (
    <section className={styles.related}>
      <h2 className={styles.title}>Related news</h2>
      <RelatedList
        limitItems={LIMIT}
        items={getRelatedNews()}
        isLoading={isLoading}
        error={error}
        articlesCount={getRelatedNews().length}
      />
    </section>
  );
};

export default RelatedNews;
