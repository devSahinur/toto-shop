import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user=action.payload
    },
    logoutUser: (state, action) => {
      state.user=null
    },
  },
});

export const { loginUser, logoutUser } = appSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectUser = (state) => state