import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSingleCategory = createAsyncThunk(
  "category/getSingleCategory",
  async (slug) => {
    //Custom Slugs
    switch (slug) {
      case "women's-clothing":
        slug = "women's%20clothing";
        break;
      case "men's-clothing":
        slug = "men's%20clothing";
        break;
    }
    // End of Custom slugs

    let url = `https://fakestoreapi.com/products/category/${slug}`;
    //console.log(url);
    const response = await fetch(url);
    const jsonResponse = response.json();
    return jsonResponse;
  }
);

const initialState = {
  data: [],
  status: "idle",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSingleCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSingleCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      });
  },
});

export default categorySlice.reducer;
