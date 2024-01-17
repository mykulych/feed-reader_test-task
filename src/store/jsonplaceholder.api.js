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
    createPost: build.mutation({
      query: (body) => ({
        url: "posts",
        method: "POST",
        body,
      }),
    }),
    updatePost: build.mutation({
      query: (body) => ({
        url: `posts/${body.id}`,
        method: "PUT",
        body,
      }),
    }),
    removePost: build.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
    })
  }),
});

export const { useGetPostsQuery, useCreatePostMutation, useUpdatePostMutation, useRemovePostMutation } = jsonplaceholderApi;