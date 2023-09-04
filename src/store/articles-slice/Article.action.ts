import { ArticleService } from "../../services/Article.service";
import { AppDispatch } from "../store";
import { articleSlice } from "./Article.slice";

export const fetchArticle =
  (limit?: number, offset?: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(articleSlice.actions.fetchingArticle());

      const response = await ArticleService.getAll(limit, offset);

      setTimeout(
        () => dispatch(articleSlice.actions.fetchingArticleSuccess(response)),
        1500
      );

      // dispatch(articleSlice.actions.fetchingArticleSuccess(response));
    } catch (e) {
      const error = e as Error;
      dispatch(articleSlice.actions.fetchingArticleError(error.message));
    }
  };
