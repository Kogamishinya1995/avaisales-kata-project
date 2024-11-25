import { configureStore } from "@reduxjs/toolkit";
import transfersReducer, { TransfersState } from "./transfersSlice";

export type RootState = {
  transfersReducer: TransfersState;
};

export default configureStore({
  reducer: {
    transfersReducer,
  },
});
