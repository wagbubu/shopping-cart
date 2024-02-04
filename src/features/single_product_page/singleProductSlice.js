import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSingleProduct = createAsyncThunk(
  "singleProduct/getSingleProduct",
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const jsonResponse = await response.json();
    return jsonResponse;
  }
);

const initialState = {
  data: {},
  status: "idle",
};

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      });
  },
});

export default singleProductSlice.reducer;

export const { setStatusIdle } = singleProductSlice.actions;
