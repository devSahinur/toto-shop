import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/appSlice";
import wishReducer from "../slices/wishSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    wish: wishReducer,
  },
});
