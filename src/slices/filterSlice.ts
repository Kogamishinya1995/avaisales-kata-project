import { createSlice } from "@reduxjs/toolkit";

export interface FilterState {
  value: null | string;
}

// interface FilterActionPayload {
//   value: string;
// }

const initialState = {
  value: null,
};

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
