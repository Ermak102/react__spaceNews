import { useEffect } from "react";
import NewsList from "../components/news-list/NewsList";
import { useAppDispatch, useAppSelector } from "../hooks/store";
import { fetchArticle } from "../store/articles-slice/Article.action";

const LIMIT = 21;

const HomePage = () => {
  const { news, isLoading, error } = useAppSelector((state) => state.articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticle());
  }, [dispatch]);

  return (
    <main>
      <div className="container">
        <NewsList
          limitItem={LIMIT}
          news={news.results}
          isLoading={isLoading}
          error={error}
          articlesCount={news.count}
        />
      </div>
    </main>
  );
};

export default HomePage;
