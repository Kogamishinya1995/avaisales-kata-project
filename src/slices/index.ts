import { configureStore } from "@reduxjs/toolkit";
import transfersReducer from "./transfersSlice";

export default configureStore({
  reducer: {
    transfersReducer,
  },
});
