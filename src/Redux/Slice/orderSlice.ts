import { createSlice } from "@reduxjs/toolkit";

export interface orderState {
  order: {
    name: string;
    mobile: string;
    email: string;
    city: string;
    state: string;
    zip: number;
    address: string;
    status: string;
    DeliveryDate: number;

    product: [
      {
        title: string;
        price: number;
        quantity: number;
        total: number;
        img: string;
      }
    ];
  }[];
}

const initialState: orderState = {
  order: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    PlaceOrder: (state, { payload }) => {
      state.order = [...state.order, payload];
    },
  },
});

export const { PlaceOrder } = orderSlice.actions;
export default orderSlice.reducer;
