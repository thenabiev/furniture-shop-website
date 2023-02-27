import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shopSlice";

export const store=configureStore({
    reducer:{
        shop: shopSlice
    }
})