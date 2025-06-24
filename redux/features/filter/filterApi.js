// redux/features/julyApi.js (or your apiSlice.js)

import { apiSlice } from "../api/apiSlice";


export const martyrsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMartyrFilters: builder.query({
  query: ({ lang, category }) => `${category}/filters?lang=${lang}`,
}),
  }),
});

export const { 
  useGetMartyrFiltersQuery
 } = martyrsApi;
