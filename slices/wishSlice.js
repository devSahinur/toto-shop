import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
  currenUserWish: [],
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
        (item) => item === action.payload
      );

      if (findIndex >= 0) {
        return;
      } else {
        state.wishList = [...state.wishList, action.payload];
      }
    },

    removeSingleWish: (state, action) => {
      const findIndex = state.wishList.findIndex(
        (item) => item === action.payload
      );
      const newWish = [...state.wishList];
      if (findIndex >= 0) {
        newWish.splice(findIndex, 1);
      }
      state.wishList = newWish;
    },

    removeFromWish: (state, action) => {
      const findIndex = state.currenUserWish.findIndex(
        (item) => item._id === action.payload._id
      );
      const newWish = [...state.currenUserWish];
      if (findIndex >= 0) {
        newWish.splice(findIndex, 1);
      }
      state.currenUserWish = newWish;
    },

    addSingleWish: (state, action) => {
      const findTaht = state.currenUserWish.find(
        (wish) => wish._id === action.payload._id
      );

      if (findTaht) {
        return;
      } else {
        state.currenUserWish = [...state.currenUserWish, action.payload];
      }
    },
  },
});

export const {
  addToWish,
  removeFromWish,
  addAllToWish,
  addSingleWish,
  removeSingleWish,
} = wishSlice.actions;

export const selectWish = (state) => state.wish.wishList;
export const selectWishAll = (state) => state.wish.currenUserWish;

export default wishSlice.reducer;
