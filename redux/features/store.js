import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import modalsSlice from "./modals/modalsSlice";

const store = configureStore({
  reducer: {
    // Add the RTK Query API reducer
    [apiSlice.reducerPath]: apiSlice.reducer,
    modal: modalsSlice
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
