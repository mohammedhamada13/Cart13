import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./slice/Products-slice";
import cartSlice from "./slice/cart-slice";

export const Store = configureStore({
    reducer :{
        products : ProductsSlice,
        cart : cartSlice,
    }
})