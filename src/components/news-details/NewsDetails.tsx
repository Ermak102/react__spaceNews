import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useAppCashedDispatch,
  useAppDispatch,
  useAppSelector,
} from "../../hooks/store";
import { useEffect } from "react";
import { fetchNewsById } from "../../store/news-slice/News.active";
import styles from "./NewsDetails.module.scss";
import RelatedNews from "../related-news/RelatedNews";
import { isFavorite } from "../../helpers/favorite.helper";

const NewsDetails = () => {
  const { id } = useParams<string>();

  const { news, isLoading, error } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();

  const { favorites } = useAppSelector((state) => state.favorites);
  const { toggleAddFavorite } = useAppCashedDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (id === undefined) return;

    dispatch(fetchNewsById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (error === "") return;

    redirectToErrorPage();
  }, [error]);

  const redirectToErrorPage = () => {
    navigate("/error");
  };

  return (
    <section>
      {!isLoading && news && (
        <div className="container">
          <div className={styles.published}>{news?.published_at}</div>

          <div className={styles["image-wrapper"]}>
            <img src={news?.image_url} alt="something" />
          </div>
          <h1 className={styles.title}>{news?.title}</h1>

          <table>
            <tbody>
              <tr>
                <td>
                  <span>Publisher:</span>
                </td>
                <td>{news?.news_site}</td>
              </tr>
              <tr>
                <td>
                  <span>Website:</span>
                </td>
                <td>
                  <Link to={news?.url}>
                    <i>{news?.url}</i>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>

          <div className={styles.body}>{news?.summary}</div>
          <button className="button" onClick={() => toggleAddFavorite(news)}>
            {isFavorite(favorites, news.id) ? "Remove from " : "Add to "}
            favorites
          </button>
          <RelatedNews publisher={news.news_site} currentId={news.id} />
        </div>
      )}
    </section>
  );
};

export default NewsDetails;
