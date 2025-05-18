import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    userLogin: null,
    name: "jihana",
  },
  reducers: {
    usersRegistered(state, action: PayloadAction<string>) {
          console.log(action.payload);
          console.log(state.name);
          
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
