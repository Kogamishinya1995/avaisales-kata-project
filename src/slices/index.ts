import { configureStore } from "@reduxjs/toolkit";
import {
  FilterState,
  TicketsState,
  TransfersState,
} from "@AppTypes/commonTypes";
import filterReducer from "./filterSlice";
import ticketReducer from "./ticketsSlice";
import transfersReducer from "./transfersSlice";

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
