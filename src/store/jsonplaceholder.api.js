import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonplaceholderApi = createApi({
  reducerPath: "jsonplaceholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_JSONPLACEHOLDER_API_URL,
  }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => ({
        url: "posts?userId=1",
      }),
    }),
  }),
});

export const { useGetPostsQuery } = jsonplaceholderApi;