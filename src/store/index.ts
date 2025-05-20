import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./slice/auth";
import userSlice from "./slice/user";
import settingSlice from "./slice/settings";

const persistConfig = {
  key: "roots",
  storage: storage,
  whitelist: ["auth", "user","settings"],
};

const userReducer = combineReducers({
  auth: authSlice.reducer,
  user: userSlice.reducer,
  settings: settingSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
        ],
      },
      immutableCheck: false,
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
