import { createSlice } from "@reduxjs/toolkit";

export interface TransfersState {
  allTransfers: boolean;
  withoutTransfers: boolean;
  oneTransfer: boolean;
  twoTransfer: boolean;
  threeTransfer: boolean;
}

interface TransferActionPayload {
  allTransfers: boolean;
  withoutTransfers: boolean;
  oneTransfer: boolean;
  twoTransfer: boolean;
  threeTransfer: boolean;
}

type ActionTypes = {
  type: string;
  payload: keyof TransferActionPayload;
};

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
    transfersChecked: (state, actions: ActionTypes) => {
      state[actions.payload] = !state[actions.payload];

      const allOthersChecked =
        state.withoutTransfers &&
        state.oneTransfer &&
        state.twoTransfer &&
        state.threeTransfer;

      state.allTransfers = allOthersChecked ? true : false;
    },
  },
});

export const { allTransfersChecked, transfersChecked } = transfersSlice.actions;
export default transfersSlice.reducer;
