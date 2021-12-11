import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/appSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
 