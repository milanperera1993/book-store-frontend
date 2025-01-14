import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseURL";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/orders`,
  credentials: "include",
  prepareHeaders: (Headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      Headers.set("Authorization", `Bearer ${token}`);
    }
    return Headers;
  },
});

const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery,
  tagTypes: ["Orders"],
  endpoints: (builer) => ({
    createOrder: builer.mutation({
      query: (order) => ({
        url: "/create-order",
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["Orders"],
    }),
    fetchOrderByEmail: builer.query({
      query: (email) => ({
        url: `/email/${email}`,
      }),
      providesTags: ["Orders"]
    })
  }),
});

export const { useCreateOrderMutation, useFetchOrderByEmailQuery } = ordersApi;
export default ordersApi;
