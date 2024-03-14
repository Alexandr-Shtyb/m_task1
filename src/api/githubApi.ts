import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "./interfaces";
import { IRepos } from "./interfaces";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  tagTypes: ["github"],
  endpoints: build => ({
    getUser: build.query<IUser, string>({
      query: user => ({
        url: `users/${user}`,
      }),
      providesTags: ["github"],
    }),
    getRepos: build.query<IRepos[], string>({
      query: user => ({
        url: `users/${user}/repos`,
      }),
      providesTags: ["github"],
    }),
  }),
});
