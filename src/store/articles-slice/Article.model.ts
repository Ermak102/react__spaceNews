export interface IArticle {
  count: number;
  next: string | null;
  previous: string | null;
  results: INews[];
}

export interface INews {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
}

export interface IArticleState {
  news: IArticle;
  isLoading: boolean;
  error: string | null;
}
