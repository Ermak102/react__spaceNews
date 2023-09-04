import { INews } from "../store/articles-slice/Article.model";

export const isFavorite = (favorites: INews[], id: number) =>
  favorites.some((favorite) => favorite.id === id);

export const getDate = (date: string) => {
  return new Date(date).toLocaleDateString();
};
