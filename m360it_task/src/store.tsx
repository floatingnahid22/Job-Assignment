import { configureStore } from "@reduxjs/toolkit";
import { missionsApi } from "./services/missionsApi";

export const store = configureStore({
  reducer: {
    [missionsApi.reducerPath]: missionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(missionsApi.middleware),
});
