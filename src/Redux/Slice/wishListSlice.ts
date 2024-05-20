import { createSlice } from "@reduxjs/toolkit";

export interface wishlistState {
  wistList: {
    title: string;
    price: number;
    img: string;
    status: string;
  }[];
}

const initialState: wishlistState = {
  wistList: [],
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, { payload }) => {
      state.wistList = [...state.wistList, payload];
    },
    deleteWishListItem: (state, { payload }) => {
      const temp = state.wistList;
      temp.splice(payload, 1);
      state.wistList = temp;
    },
  },
});

export const { addToWishList, deleteWishListItem } = wishListSlice.actions;
export default wishListSlice.reducer;
