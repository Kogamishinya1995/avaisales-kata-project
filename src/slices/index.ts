import { configureStore } from "@reduxjs/toolkit";
import filterReducer, { FilterState } from "./filterSlice";
import { ticketsApi } from "./ticketsAPI";
import transfersReducer, { TransfersState } from "./transfersSlice";

export type RootState = {
  transfers: TransfersState;
  filter: FilterState;
};

export default configureStore({
  reducer: {
    transfers: transfersReducer,
    filter: filterReducer,
    [ticketsApi.reducerPath]: ticketsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ticketsApi.middleware),
});
