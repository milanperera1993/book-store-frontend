import { configureStore } from "@reduxjs/toolkit";

// reducers
import cartSlice from "./features/cart/cartSlice";

// api
import booksApi  from "./features/books/booksApi";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});
