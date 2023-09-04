import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INews } from "../articles-slice/Article.model";

interface IInitialState {
  favorites: INews[];
}

const initialState: IInitialState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleAddFavorite: (state, { payload: favorite }: PayloadAction<INews>) => {
      const isRepeat =
        state.favorites.filter((item) => item.id === favorite.id).length > 0;

      if (isRepeat) {
        state.favorites = state.favorites.filter(
          (item) => item.id !== favorite.id
        );

        addToStore(state.favorites);
        return;
      }

      state.favorites.push(favorite);
      addToStore(state.favorites);
    },
    deleteFavorite: (state, { payload: id }: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((item) => item.id !== id);
      addToStore(state.favorites);
    },
    setupFavoritesFromStore: (state) => {
      state.favorites = getFavoritesFromStore();
    },
  },
});

const FAVORITE_STORE_NAME = "favorite";

const addToStore = (favorites: INews[]) => {
  localStorage.setItem(FAVORITE_STORE_NAME, JSON.stringify(favorites));
};

const getFavoritesFromStore = () => {
  const favorites = localStorage.getItem(FAVORITE_STORE_NAME);

  if (!favorites) return [];

  return JSON.parse(favorites);
};
