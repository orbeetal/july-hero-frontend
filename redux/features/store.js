import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import modalsSlice from "./modals/modalsSlice";
import searchReducer from './search/searchSlice';
import filterReducer from './filter/filterSlice';

const store = configureStore({
  reducer: {
    // Add the RTK Query API reducer
    [apiSlice.reducerPath]: apiSlice.reducer,
    modal: modalsSlice,
    search: searchReducer,
    filter: filterReducer
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
