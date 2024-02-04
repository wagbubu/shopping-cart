import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "shop/getAllProducts",
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (err) {
      throw new Error(err);
    }
  }
);

const initialState = {
  data: [],
  status: "idle",
};

const shopPageSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.concat(action.payload);
      });
  },
});

export default shopPageSlice.reducer;
