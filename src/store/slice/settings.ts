import { createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { useSelector, type TypedUseSelectorHook } from "react-redux";

type UserPreferencesState = {
  darkMode: boolean;
 
};

const initialState: UserPreferencesState = {
  darkMode: false
};

const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    setDarkMode(state, action: PayloadAction<boolean>) {
      state.darkMode = action.payload;
    },
    
  },
});



export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const settingActions = settingSlice.actions;
export default settingSlice;