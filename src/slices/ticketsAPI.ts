import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface SearchIdResponse {
  searchId: string;
}

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

export interface TicketsResponse {
  tickets: Ticket[];
  stopCount: number;
}

export const ticketsApi = createApi({
  reducerPath: "tickets",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://aviasales-test-api.kata.academy",
  }),
  endpoints: (builder) => ({
    getSearchId: builder.query<SearchIdResponse, null>({
      query: () => "search",
    }),
    getTickets: builder.query<TicketsResponse, string>({
      query: (searchId: string) => `tickets?searchId=${searchId}`,
    }),
  }),
});

export const { useGetSearchIdQuery, useGetTicketsQuery } = ticketsApi;
