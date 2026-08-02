import { configureStore } from "@reduxjs/toolkit";
import acmeReducer from "./reducers";

export const store = configureStore({
  reducer: {
    acme: acmeReducer,
  },
});