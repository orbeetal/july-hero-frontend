import { apiSlice } from "./api/apiSlice";

export const julyApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMartyrs: builder.query({
            query: (lang) => `martyrs?lang=${lang}`,
        }),
        getMartyrsBySlug: builder.query({
            query: ({slug, lang}) => `martyrs/${slug}?lang=${lang}`,
        }),
        getInjured: builder.query({
            query: (lang) => `injured?lang=${lang}`,
        }),
        getInjuredBySlug: builder.query({
            query: ({slug, lang}) => `injured/${slug}?lang=${lang}`,
        }),
    }),
});

export const {
    useGetMartyrsQuery,
    useGetMartyrsBySlugQuery,
    useGetInjuredQuery,
    useGetInjuredBySlugQuery
} = julyApi;
