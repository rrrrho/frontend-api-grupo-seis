import { createSlice } from "@reduxjs/toolkit";
import initialProducts from "../components/Checkout/products.json";

const initialState = {
  products: initialProducts,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
