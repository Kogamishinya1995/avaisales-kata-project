import { configureStore } from "@reduxjs/toolkit";
import filterReducer, { FilterState } from "./filterSlice";
import transfersReducer, { TransfersState } from "./transfersSlice";

export type RootState = {
  transfers: TransfersState;
  filter: FilterState;
};

export default configureStore({
  reducer: {
    transfers: transfersReducer,
    filter: filterReducer,
  },
});
