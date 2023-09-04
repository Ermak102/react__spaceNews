import { configureStore } from "@reduxjs/toolkit";
import { articleSlice } from "./articles-slice/Article.slice";
import { newsSlice } from "./news-slice/News.slice";
import { favoriteSlice } from "./favorites-slice/Favorite.slice";

export const setupStore = configureStore({
  reducer: {
    news: newsSlice.reducer,
    articles: articleSlice.reducer,
    favorites: favoriteSlice.reducer,
  },
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
