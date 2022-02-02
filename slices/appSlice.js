import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // state.items = [...state.items, action.payload];
      console.log(action.payload.product?._id);
      const findIndex = state.items.findIndex(
        (product) => product?.product?._id === action.payload.product?._id
      );
      let newCart = [...state.items];
      if (findIndex >= 0) {
        console.log("if");
        newCart[findIndex].quantity += 1;
      } else {
        newCart = [...state.items, action.payload];
      }
      state.items = newCart;
    },
    removeFromBasket: (state, action) => {
      console.log(action.payload.product?._id);
      const findIndex = state.items.findIndex(
        (product) => product?.product?._id === action.payload._id
      );
      let newCart = [...state.items];
      if (findIndex >= 0) {
        if (newCart[findIndex].quantity > 1) {
          newCart[findIndex].quantity -= 1;
        } else {
          newCart.splice(findIndex, 1);
        }
      }
      state.items = newCart;
    },
    removeFulProduct: (state, action) => {
      const findIndex = state.items.findIndex(
        (product) => product?.product?._id === action.payload._id
      );
      let newCart = [...state.items];
      if (findIndex >= 0) {
        newCart.splice(findIndex, 1);
      }
      state.items = newCart;
    },
  },
});

export const { addToBasket, removeFromBasket, removeFulProduct } =
  basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );

export default basketSlice.reducer;
