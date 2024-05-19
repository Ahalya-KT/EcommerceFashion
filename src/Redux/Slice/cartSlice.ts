import { createSlice } from "@reduxjs/toolkit";

export interface cartState {
  cart: {
    title: string;
    price: number;
    quantity: number;
    total: number;
    img: string;
  }[];
}

const initialState: cartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart = [...state.cart, payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
