import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
	reducerPath: "categoryAPi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.puputravel.com:8000/api/",
	}),
	endpoints: (builder) => ({
		getCategories: builder.query({
			query: () => "categories",
		}),
	}),
});

export const { useGetCategoriesQuery } = categoryApi;
