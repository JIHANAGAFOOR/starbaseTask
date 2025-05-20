import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { useSelector, type TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../index";
import type { User } from "../../types/cards";


type UserSliceState = {
  userData: User[];
};

//  Initial state
const initialState: UserSliceState = {
  userData: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userDetailsSeelcted(state, action: PayloadAction<User[]>) {
      //   console.log("sss" + JSON.stringify(action.payload));
      state.userData = action.payload;
    },
    userDetailsAdd(state, action: PayloadAction<User>) {
      state.userData.unshift(action.payload);
    },
  },
});
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const userActions = userSlice.actions;
export default userSlice;
