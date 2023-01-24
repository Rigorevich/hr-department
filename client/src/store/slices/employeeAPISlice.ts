import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IEmployee } from "../../types/types";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:7000/" }),
  endpoints: (builder) => ({
    getEmployeeById: builder.query<IEmployee, string>({
      query: (id) => `employee/${id}`,
    }),
    getStaff: builder.query<IEmployee[], string>({
      query: (url = "") => `employee/`,
    }),
    getStaffByDepartment: builder.query<IEmployee[], string>({
      query: (id) => `employee/staff/${id}`,
    }),
  }),
});

export const {
  useGetStaffQuery,
  useGetEmployeeByIdQuery,
  useGetStaffByDepartmentQuery,
} = employeeApi;
