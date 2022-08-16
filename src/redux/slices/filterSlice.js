import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  // sort: {
  //   name: "popular first",
  //   sort: "rating&order=desc",
  // },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    //   decrement: (state) => {
    //     state.value -= 1;
    //   },
    //   incrementByAmount: (state, action) => {
    //     state.value += action.payload;
    //   },
  },
});

// console.log(filterSlice);

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
