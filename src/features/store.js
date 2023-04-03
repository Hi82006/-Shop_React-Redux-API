import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import categoriesSlice from "./categories/categoriesSlice";
import productSlice from "./products/productsSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

