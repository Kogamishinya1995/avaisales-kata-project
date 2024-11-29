import { configureStore } from "@reduxjs/toolkit";
import filterReducer, { FilterState } from "./filterSlice";
import ticketReducer, { TicketsState } from "./ticketsSlice";
import transfersReducer, { TransfersState } from "./transfersSlice";

export type RootState = {
  transfers: TransfersState;
  filter: FilterState;
  tickets: TicketsState;
};

const store = configureStore({
  reducer: {
    transfers: transfersReducer,
    filter: filterReducer,
    tickets: ticketReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
