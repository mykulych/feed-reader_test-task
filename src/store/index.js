import { configureStore } from "@reduxjs/toolkit";
import { nasaApi } from "./nasa.api";
import { jsonplaceholderApi } from "./jsonplaceholder.api";

export const store = configureStore({
    reducer: {
        [nasaApi.reducerPath]: nasaApi.reducer,
        [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(nasaApi.middleware).concat(jsonplaceholderApi.middleware)
})