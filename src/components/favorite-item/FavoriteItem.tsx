import React, { FC, useState } from "react";
import { INews } from "../../store/articles-slice/Article.model";

import styles from "./FavoriteItem.module.scss";
import { Link } from "react-router-dom";
import { useAppCashedDispatch } from "../../hooks/store";
import { getDate } from "../../helpers/favorite.helper";

interface IFavoriteItem {
  favorite: INews;
}

const FavoriteItem: FC<IFavoriteItem> = ({ favorite }) => {
  const { deleteFavorite } = useAppCashedDispatch();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.favorite}>
      <div className={styles.wrapper + " " + (isOpen ? styles.open : " ")}>
        <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
          <div className={styles.title}>{favorite.title}</div>
          <div className={styles.indicator}>
            <span className={styles.left}></span>
            <span className={styles.right}></span>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.summary}>{favorite.summary}</div>
          <Link to={favorite.url} className={styles.link}>
            <div>{favorite.news_site}</div>
            <div>{favorite.url}</div>
          </Link>
          <div className={styles.buttons}>
            <Link to={`/news/${favorite.id}`} className="button">
              Learn more
            </Link>
            <button
              className="button-red"
              onClick={() => deleteFavorite(favorite.id)}
            >
              Delete
            </button>
          </div>
        </div>
        <div className={styles.published}>{getDate(favorite.published_at)}</div>
      </div>
    </div>
  );
};

export default FavoriteItem;
