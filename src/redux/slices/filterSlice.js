import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "popular first",
    sort: "rating&order=desc",
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

// console.log(filterSlice);

export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
