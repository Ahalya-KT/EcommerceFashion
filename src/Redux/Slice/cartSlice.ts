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

    updateQty: (state, { payload }) => {
      const { type, index } = payload;
      if (type === "inc") {
        state.cart[index].quantity += 1;
      } else if (type === "decr") {
        state.cart[index].quantity -= 1;
      }
    },

    deleteCartItem: (state, { payload }) => {
      const temp = state.cart;
      temp.splice(payload, 1);
      state.cart = temp;
    },
  },
});

export const { addToCart, updateQty, deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;
