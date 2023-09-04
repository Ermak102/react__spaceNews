import { ArticleService } from "../../services/Article.service";
import { AppDispatch } from "../store";
import { newsSlice } from "./News.slice";

export const fetchNewsById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(newsSlice.actions.fetchingNews());

    const response = await ArticleService.getById(id);

    dispatch(newsSlice.actions.fetchingNewsSuccess(response));
  } catch (e) {
    const error = e as Error;
    dispatch(newsSlice.actions.fetchingNewsError(error.message));
  }
};
