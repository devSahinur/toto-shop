import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
};

export const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addAllToWish: (state, action) => {
      state.wishList = action.payload;
    },
    addToWish: (state, action) => {
      const findIndex = state.wishList.findIndex(
        (item) => item._id === action.payload._id
      );

      if (findIndex >= 0) {
        return;
      } else {
        state.wishList = [...state.wishList, action.payload];
      }
    },
    removeFromWish: (state, action) => {
      const findIndex = state.wishList.findIndex(
        (item) => item._id === action.payload._id
      );
      const newWish = [...state.wishList];
      if (findIndex >= 0) {
        newWish.splice(findIndex, 1);
      }
      state.wishList = newWish;
    },
  },
});

export const { addToWish, removeFromWish, addAllToWish } = wishSlice.actions;

export const selectWish = (state) => state.wish.wishList;

export default wishSlice.reducer;
