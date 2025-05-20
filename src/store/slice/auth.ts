import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { useSelector, type TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../index";

type AuthState = {
  token: string | null;
  username: string | null;
};
const initialState: AuthState = {
  token: null,
  username: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(
      state,
      action: PayloadAction<{ token: string; username: string }>
    ) {
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
    logOut(state) {
      state.token = null;
      state.username = null;
    },
  },
});
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const authActions = authSlice.actions;
export default authSlice;
