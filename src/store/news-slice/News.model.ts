import { INews } from "../articles-slice/Article.model";

export interface INewsState {
  news: INews | null;
  isLoading: boolean;
  error: string;
}
