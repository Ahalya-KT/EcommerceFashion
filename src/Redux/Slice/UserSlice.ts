import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  user?: {
    name?: string;
    email: string;
    mobile?: number;
    address?: string;
    city?: string;
    password?: string;
  } | null;
}

// because of typeScript
const initialState: UserState = {
  user: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState["user"]>) => {
      state.user = action.payload;
    },

    // to logout a function
    logout: (state) => {
      state.user = null;
    },

    // sign out function
    signIn: (state, action: PayloadAction<UserState["user"]>) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, signIn } = UserSlice.actions;
export default UserSlice.reducer;
