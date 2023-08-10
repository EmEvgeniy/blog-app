import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./slices/lang";
import navReduce from "./slices/nav";
import { categoryApi } from "./middlewares/categoryApi";

export const store = configureStore({
	reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
		lang: langReducer,
		nav: navReduce,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([categoryApi.middleware,]),
});
