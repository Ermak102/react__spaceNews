import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INews } from "../articles-slice/Article.model";
import { INewsState } from "./News.model";

const initialState: INewsState = {
  news: null,
  isLoading: false,
  error: "",
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    fetchingNews: (state) => {
      state.isLoading = true;
    },
    fetchingNewsSuccess: (state, { payload: news }: PayloadAction<INews>) => {
      state.news = news;

      state.isLoading = false;
      state.error = "";
    },
    fetchingNewsError: (state, { payload: error }: PayloadAction<string>) => {
      state.error = error;

      state.isLoading = false;
    },
  },
});
