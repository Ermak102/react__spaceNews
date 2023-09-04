import React, { FC } from "react";
import { INews } from "../../store/articles-slice/Article.model";

import { GiAstronautHelmet } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import styles from "./NewsItem.module.scss";
import { Link } from "react-router-dom";
import { useAppCashedDispatch, useAppSelector } from "../../hooks/store";
import { getDate, isFavorite } from "../../helpers/favorite.helper";

interface INewsItem {
  news: INews;
}

const NewsItem: FC<INewsItem> = ({ news }) => {
  const { favorites } = useAppSelector((state) => state.favorites);
  const { toggleAddFavorite } = useAppCashedDispatch();

  return (
    <li className={styles.news}>
      <div className={styles["image-wrapper"]}>
        <BsFillBookmarkPlusFill
          size={25}
          className={styles.bookmarks}
          onClick={() => toggleAddFavorite(news)}
          fill={
            isFavorite(favorites, news.id)
              ? "rgb(255, 0, 0)"
              : "rgb(255, 230, 0)"
          }
        />
        <img src={news.image_url} alt="something" />
      </div>
      <div className={styles["summary-wrapper"]}>
        <div className={styles.title}>{news.title}</div>
        <div className={styles["subtitle-wrapper"]}>
          <GiAstronautHelmet />
          <div className={styles.subtitle}>{news.news_site}</div>
        </div>
        <div className={styles["subtitle-wrapper"]}>
          <MdDateRange />
          <div className={styles.subtitle}>{getDate(news.published_at)}</div>
        </div>

        <Link className="button" to={`/news/${news.id}`}>
          Learn more
        </Link>
      </div>
    </li>
  );
};

export default NewsItem;
