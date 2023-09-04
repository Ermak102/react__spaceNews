import axios from "axios";
import { IArticle, INews } from "../store/articles-slice/Article.model";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// const LIMIT = process.env.REACT_APP_ARTICLE_LIMIT;

export class ArticleService {
  static async getAll(limit: number = 21, offset?: number) {
    const { data } = await axios.get<IArticle>("/articles", {
      params: {
        limit: limit,
        offset: offset,
      },
    });

    return data;
  }

  static async getById(id: string) {
    const { data } = await axios.get<INews>(`/articles/${id}`);

    return data;
  }
}
