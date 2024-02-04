import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    id: 1,
    products: [],
  },
  showCart: false,
  status: "idle",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const index = state.data.products.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (index !== -1) {
        state.data.products[index].quantity += action.payload.quantity;
      } else {
        state.data.products = state.data.products.concat(action.payload);
      }
    },
    deleteItem: (state, action) => {
      const filteredProducts = state.data.products.filter(
        (item) => item.productId !== action.payload.productId
      );
      state.data.products = filteredProducts;
    },
    toggleCart: (state, action) => {
      state.showCart = action.payload;
    },
  },
});

export const { toggleCart, addItemToCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
