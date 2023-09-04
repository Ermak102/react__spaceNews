import React, { FC } from "react";
import { INews } from "../../store/articles-slice/Article.model";
import FavoriteItem from "../favorite-item/FavoriteItem";
import styles from "./FavoriteList.module.scss";

interface IFavoriteList {
  favorites: INews[];
}

const FavoriteList: FC<IFavoriteList> = ({ favorites }) => {
  return (
    <div>
      {favorites.map((favorite) => (
        <FavoriteItem key={favorite.id} favorite={favorite} />
      ))}

      {!favorites.length && (
        <div className={styles.none}>В избранном отсутствуют записи</div>
      )}
    </div>
  );
};

export default FavoriteList;
