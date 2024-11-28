import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Ticket {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
  ];
}

export interface TicketsState {
  loadingStatus: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  searchId: string | null;
  tickets: Ticket[];
}

export interface SearchIdResponse {
  searchId: string;
}

export interface TicketsResponse {
  tickets: Ticket[];
  stop: boolean;
}

export const fetchSearchId = createAsyncThunk(
  "tickets/fetchSearchId",
  async (): Promise<SearchIdResponse> => {
    const response = await axios.get<SearchIdResponse>(
      "https://front-test.dev.aviasales.ru/search"
    );
    return response.data;
  }
);

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async (searchId: string): Promise<TicketsResponse> => {
    const response = await axios.get<TicketsResponse>(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    );
    return response.data;
  }
);

const ticketSlice = createSlice({
  name: "tickets",
  initialState: {
    loadingStatus: "idle" as "idle" | "loading" | "succeeded" | "failed",
    error: null as string | null,
    searchId: null as string | null,
    tickets: [] as Ticket[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.loadingStatus = "loading";
        state.error = null;
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.loadingStatus = "succeeded";
        state.searchId = action.payload.searchId;
      })
      .addCase(fetchSearchId.rejected, (state, action) => {
        state.loadingStatus = "failed";
        state.error = action.error.message || "Failed to fetch search ID";
      })
      .addCase(fetchTickets.pending, (state) => {
        state.loadingStatus = "loading";
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loadingStatus = "succeeded";
        state.tickets = [...state.tickets, ...action.payload.tickets]; // Добавляем новые билеты
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loadingStatus = "failed";
        state.error = action.error.message || "Failed to fetch tickets";
      });
  },
});

export default ticketSlice.reducer;
