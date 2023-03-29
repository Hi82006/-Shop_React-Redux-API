import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productSlice from "./products/productsSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productSlice,
    },
    devTools: true,
})

