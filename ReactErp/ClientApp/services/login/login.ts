import { baseResult } from "@/types/baseResult";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { MaybePromise } from "@reduxjs/toolkit/dist/query/tsHelpers";
import { BaseQueryApi, BaseQueryFn, createApi, EndpointDefinitions, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Login } from "./loginApiInterface";

export const loginApi = createApi({
    reducerPath: "loginApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/" }),
    tagTypes: ["login"],
    endpoints: (builder) => ({
        postLogin: builder.mutation({
            query: (initialpost) => ({ url: `account/login`, method: "POST", body: initialpost }),
            invalidatesTags: (response) => [{ type: 'login', id: 'gggg' }],
        }),
    })
});

export const {
    usePostLoginMutation,
} = loginApi