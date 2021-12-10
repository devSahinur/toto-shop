import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../slices/appSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
});