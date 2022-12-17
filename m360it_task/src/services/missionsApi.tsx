import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Mission } from "../models/mission.model";

export const missionsApi = createApi({
  reducerPath: "missionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v3/launches",
  }),
  endpoints: (builder) => ({
    missions: builder.query<Mission[], void>({
      query: () => "/",
    }),
  }),
});

export const { useMissionsQuery } = missionsApi;
