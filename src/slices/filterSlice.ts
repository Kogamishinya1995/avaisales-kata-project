import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export interface FilterState {
  value: null | string;
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
