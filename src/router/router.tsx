import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import NewsDetails from "../components/news-details/NewsDetails";
import ErrorPage from "../pages/404/ErrorPage";
import HomePage from "../pages/HomePage";
import FavoritesPage from "../pages/favorites/FavoritesPage";

export const router = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/news/:id",
    element: <NewsDetails />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
