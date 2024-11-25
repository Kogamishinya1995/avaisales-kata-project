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
      console.log(Object.values(state));

      const oneOfAllChecked =
        state.withoutTransfers ||
        state.oneTransfer ||
        state.twoTransfer ||
        state.threeTransfer;

      const allOthersChecked =
        state.withoutTransfers &&
        state.oneTransfer &&
        state.twoTransfer &&
        state.threeTransfer;

      if (oneOfAllChecked && !allOthersChecked) {
        state.allTransfers = true;
        state.withoutTransfers = true;
        state.oneTransfer = true;
        state.twoTransfer = true;
        state.threeTransfer = true;
      } else {
        state.allTransfers = !state.allTransfers;
        state.withoutTransfers = !state.withoutTransfers;
        state.oneTransfer = !state.oneTransfer;
        state.twoTransfer = !state.twoTransfer;
        state.threeTransfer = !state.threeTransfer;
      }
    },
    withoutTransfersChecked: (state) => {
      state.withoutTransfers = !state.withoutTransfers;

      const allOthersChecked =
        state.withoutTransfers &&
        state.oneTransfer &&
        state.twoTransfer &&
        state.threeTransfer;

      state.allTransfers = allOthersChecked ? true : false;
    },
    oneTransfersChecked: (state) => {
      state.oneTransfer = !state.oneTransfer;

      const allOthersChecked =
        state.withoutTransfers &&
        state.oneTransfer &&
        state.twoTransfer &&
        state.threeTransfer;

      state.allTransfers = allOthersChecked ? true : false;
    },
    twoTransfersChecked: (state) => {
      state.twoTransfer = !state.twoTransfer;

      const allOthersChecked =
        state.withoutTransfers &&
        state.oneTransfer &&
        state.twoTransfer &&
        state.threeTransfer;

      state.allTransfers = allOthersChecked ? true : false;
    },
    threeTransferTransfersChecked: (state) => {
      state.threeTransfer = !state.threeTransfer;

      const allOthersChecked =
        state.withoutTransfers &&
        state.oneTransfer &&
        state.twoTransfer &&
        state.threeTransfer;

      state.allTransfers = allOthersChecked ? true : false;
    },
  },
});

export const {
  allTransfersChecked,
  withoutTransfersChecked,
  oneTransfersChecked,
  twoTransfersChecked,
  threeTransferTransfersChecked,
} = transfersSlice.actions;
export default transfersSlice.reducer;
