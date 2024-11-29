// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyType = any;

export interface FilterState {
  value: null | string;
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

export interface TransfersState {
  allTransfers: boolean;
  withoutTransfers: boolean;
  oneTransfer: boolean;
  twoTransfer: boolean;
  threeTransfer: boolean;
}

export interface TransferActionPayload {
  allTransfers: boolean;
  withoutTransfers: boolean;
  oneTransfer: boolean;
  twoTransfer: boolean;
  threeTransfer: boolean;
}

export type ActionTypes = {
  type: string;
  payload: keyof TransferActionPayload;
};
