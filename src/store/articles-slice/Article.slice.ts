import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IArticle, IArticleState } from "./Article.model";

const initialState: IArticleState = {
  news: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  isLoading: false,
  error: null,
};

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    fetchingArticle: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    fetchingArticleSuccess: (
      state,
      { payload: news }: PayloadAction<IArticle>
    ) => {
      state.news = news;

      state.isLoading = false;
      state.error = null;
    },
    fetchingArticleError: (
      state,
      { payload: error }: PayloadAction<string>
    ) => {
      state.error = error;

      state.isLoading = false;
    },
    clearingError: (state) => {
      state.error = "";
    },
  },
});
