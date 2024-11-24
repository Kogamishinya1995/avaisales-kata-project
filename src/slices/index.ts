import { configureStore } from "@reduxjs/toolkit";
import transfersReducer from "./transfers";

export default configureStore({
  reducer: {
    transfersReducer,
  },
});
