import { configureStore } from "@reduxjs/toolkit";
import filterReducer, { FilterState } from "./filterSlice";
import ticketReducer, { TicketsState } from "./ticketsSlice";
import transfersReducer, { TransfersState } from "./transfersSlice";

export type RootState = {
  transfers: TransfersState;
  filter: FilterState;
  tickets: TicketsState;
};

export default configureStore({
  reducer: {
    transfers: transfersReducer,
    filter: filterReducer,
    tickets: ticketReducer,
  },
});
