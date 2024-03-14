import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { githubApi } from "../api/githubApi";

const rootReducer = combineReducers({
  [githubApi.reducerPath]: githubApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(githubApi.middleware),
  });
};
