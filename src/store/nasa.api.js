import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { processXml } from "../utils/processXml.helper";

export const nasaApi = createApi({
  reducerPath: "nasApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_NASA_API_URL,
  }),
  endpoints: (build) => ({
    getNewsRelease: build.query({
      query: () => ({
        url: "news-release/feed/",
        responseHandler: async (response) => {
          const xmlData = await response.text();
          const data = processXml(xmlData)
          return data;
        }
      }),
    }),
  }),
});

export const { useGetNewsReleaseQuery } = nasaApi;