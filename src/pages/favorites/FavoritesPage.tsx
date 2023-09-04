import styles from "./FavoritePage.module.scss";
import FavoriteList from "../../components/favorite-list/FavoriteList";
import { useAppSelector } from "../../hooks/store";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.favorites);

  return (
    <section className={styles.favorite}>
      <div className="container">
        <div className={styles.title}>Your favorites news</div>
        <FavoriteList favorites={favorites} />
      </div>
    </section>
  );
};

export default FavoritesPage;
