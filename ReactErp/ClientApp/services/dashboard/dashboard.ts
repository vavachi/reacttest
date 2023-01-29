import { baseResult } from "@/types/baseResult";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Dashboard } from "./dashboardApiInterface";
const URL = 'http://localhost:3000';
export const dashboardApi = createApi({
    reducerPath: "dashboardApi",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    tagTypes: ["ajith"],
    endpoints: (builder) => ({
        getDashboard: builder.query<baseResult<Dashboard>, { id: string; }>({
            query: ({id}) => (
                console.log(id, "id"),
                {
                url: `/dashboard/${id}`,
                method: "GET",
            }),
            providesTags: [{ type: "ajith", id: "LIST" }],
        }),
        getMachineCount: builder.mutation({
            query: (id) => ({ url: `Machine/GetMachineCount/${id}`, method: "GET" }),
            invalidatesTags: (response) => [{ type: 'ajith', id: 'LIST' }],
          }),
    })
})
export const {
 useGetDashboardQuery, 
 useGetMachineCountMutation,
  } = dashboardApi