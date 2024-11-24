import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTransfers: false,
  withoutTransfers: false,
  oneTransfer: false,
  twoTransfer: false,
  threeTransfer: false,
};

const transfersSlice = createSlice({
  name: "transfers",
  initialState,
  reducers: {
    allTransfersChecked: (state) => {
      state.allTransfers = !state.allTransfers;
    },
  },
});

export const { allTransfersChecked } = transfersSlice.actions;
export default transfersSlice.reducer;
