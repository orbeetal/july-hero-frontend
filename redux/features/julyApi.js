import { apiSlice } from "./api/apiSlice";

export const julyApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMartyrs: builder.query({
            query: (lang) => `martyrs?lang=${lang}`,
        }),
        getMartyrsBySlug: builder.query({
            query: ({ slug, lang }) => `martyrs/${slug}?lang=${lang}`,
        }),
        getInjured: builder.query({
            query: (lang) => `injured?lang=${lang}`,
        }),
        getInjuredBySlug: builder.query({
            query: ({ slug, lang }) => `injured/${slug}?lang=${lang}`,
        }),
        getMurderers: builder.query({
            query: (lang) => `murderers?lang=${lang}`,
        }),
        getMurderersBySlug: builder.query({
            query: ({ slug, lang }) => `murderers/${slug}?lang=${lang}`,
        }),
        getGraffiti: builder.query({
            query: (lang) => `graffiti?lang=${lang}`,
        }),
        getGraffitiById: builder.query({
            query: ({ id, lang }) => `graffiti/${id}?lang=${lang}`,
        }),
        getBanner: builder.query({
            query: ({ lang }) => `page/home/banners?lang=${lang}`,
        }),
        getMartyrBanner: builder.query({
            query: ({ lang }) => `page/martyrs/banners?lang=${lang}`,
        }),
        getInjuredBanner: builder.query({
            query: ({ lang }) => `page/injured/banners?lang=${lang}`,
        }),
        getEventById: builder.query({
            query: ({ selectedDate, lang }) => `events/${selectedDate}?lang=${lang}`,
        }),

    }),
});


export const {
    useGetMartyrsQuery,
    useGetMartyrsBySlugQuery,
    useGetInjuredQuery,
    useGetInjuredBySlugQuery,
    useGetGraffitiQuery,
    useGetGraffitiByIdQuery,
    useGetMurderersQuery,
    useGetMurderersBySlugQuery,
    useGetBannerQuery,
    useGetMartyrBannerQuery,
    useGetInjuredBannerQuery,
    useGetEventByIdQuery,
} = julyApi;
