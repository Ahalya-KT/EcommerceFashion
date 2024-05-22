import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slice/counterSlice";
import UserSlice from "./Slice/UserSlice";
import cartSlice from "./Slice/cartSlice";
import wishListSlice from "./Slice/wishListSlice";
import orderSlice from "./Slice/orderSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: UserSlice,
    cart: cartSlice,
    WishList: wishListSlice,
    order: orderSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
