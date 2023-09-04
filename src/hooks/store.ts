import { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { articleSlice } from "../store/articles-slice/Article.slice";
import { favoriteSlice } from "../store/favorites-slice/Favorite.slice";

const actions = {
  ...articleSlice.actions,
  ...favoriteSlice.actions,
};

export const useAppCashedDispatch = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(actions, dispatch);
  }, [dispatch]);
};

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
