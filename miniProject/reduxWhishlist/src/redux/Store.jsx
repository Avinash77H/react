import { configureStore } from "@reduxjs/toolkit";
import reducer, { CartSlice } from "./slices/CartSlice";

export const store = configureStore({
  reducer:{
    cart: CartSlice.reducer
  }
})