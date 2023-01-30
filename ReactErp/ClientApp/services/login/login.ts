import { baseResult } from "@/types/baseResult";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { MaybePromise } from "@reduxjs/toolkit/dist/query/tsHelpers";
import { BaseQueryApi, BaseQueryFn, createApi, EndpointDefinitions, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Login } from "./loginApiInterface";

export const loginApi = createApi({
    reducerPath: "loginApi",
    baseQuery: function (args: any, api: BaseQueryApi, extraOptions: {}): MaybePromise<QueryReturnValue<unknown, unknown, {}>> {
        throw new Error("Function not implemented.");
    },
    endpoints: (builder)=>({
        postLogin:builder.query()
    })
});