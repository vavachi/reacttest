import { baseResult } from "@/types/baseResult";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Admin } from "./adminApiInterface";

const { env } = require('process');

console.log(env)


const URL = 'https://localhost:7014';
export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery(),
    tagTypes: ["admin"],
    endpoints: (builder) => ({
        getAdmin: builder.query<baseResult<any>, { id: string; }>({
            query: ({id}) => (
                console.log(id, "id"),
                {
                url: `/WeatherForecast`,
                method: "GET",
            }),
            providesTags: [{ type: "admin", id: "LIST" }],
        }), 
    })
})
export const {
    useGetAdminQuery
  } = adminApi