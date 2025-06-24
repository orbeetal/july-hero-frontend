import { apiSlice } from "./api/apiSlice";

export const julyApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMartyrs: builder.query({
            query: ({ lang, search = "", occupations = [], institutions = [], organizations = [] }) => {
                const params = new URLSearchParams();
                params.set("lang", lang);
                if (search) params.set("search", search);
                if (occupations.length > 0) {
                    params.set("occupations", occupations.join(","));
                }
                if (institutions.length > 0) {
                    params.set("institutions", institutions.join(","));
                }
                if (organizations.length > 0) {
                    params.set("organizations", organizations.join(","));
                }
                return `martyrs?${params.toString()}`;
            },
        }),
        getInjured: builder.query({
            query: ({ lang, search = "", occupations = [], institutions = [], organizations = [] }) => {
                const params = new URLSearchParams();
                params.set("lang", lang);
                if (search) params.set("search", search);
                if (occupations.length > 0) {
                    params.set("occupations", occupations.join(","));
                }
                if (institutions.length > 0) {
                    params.set("institutions", institutions.join(","));
                }
                if (organizations.length > 0) {
                    params.set("organizations", organizations.join(","));
                }
                return `injured?${params.toString()}`;
            },
        }),
        getMurderers: builder.query({
            query: ({ lang, search = "", occupations = [], institutions = [], organizations = [] }) => {
                const params = new URLSearchParams();
                params.set("lang", lang);
                if (search) params.set("search", search);
                if (occupations.length > 0) {
                    params.set("occupations", occupations.join(","));
                }
                if (institutions.length > 0) {
                    params.set("institutions", institutions.join(","));
                }
                if (organizations.length > 0) {
                    params.set("organizations", organizations.join(","));
                }
                return `murderers?${params.toString()}`;
            },
        }),
        getMartyrsBySlug: builder.query({
            query: ({ slug, lang }) => `martyrs/${slug}?lang=${lang}`,
        }),
        getInjuredBySlug: builder.query({
            query: ({ slug, lang }) => `injured/${slug}?lang=${lang}`,
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
        getEvents: builder.query({
            query: (lang) => `events?lang=${lang}`,
        }),
        getEventsById: builder.query({
            query: ({ id, lang }) => `events/${id}?lang=${lang}`,
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
        getIncidentById: builder.query({
            query: ({ selectedDate, lang }) => `incidents/${selectedDate}?lang=${lang}`,
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
    useGetEventsQuery,
    useGetEventsByIdQuery,
    useGetMurderersQuery,
    useGetMurderersBySlugQuery,
    useGetBannerQuery,
    useGetMartyrBannerQuery,
    useGetInjuredBannerQuery,
    useGetIncidentByIdQuery,
} = julyApi;
