import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "product/fetchProductsStatus",
  async (params) => {
    const { categoryID, sortBy } = params;
    const { data } = await axios.get(
      `https://62f7c196ab9f1f8e8902d90e.mockapi.io/items?${categoryID}&sortBy=${sortBy}`
    );
    return data;
  }
);

const initialState = {
  items: [],
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.items = [];
      console.log("loading data");
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;

      console.log("completed", state);
    },
    [fetchProducts.rejected]: (state, action) => {
      state.items = [];

      console.log("error", action);
    },
  },
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
