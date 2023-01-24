import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IDepartment } from "../../types/types";

export const departmentsApi = createApi({
  reducerPath: "departmentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:7000/" }),
  endpoints: (builder) => ({
    getDepartmentById: builder.query<IDepartment, string>({
      query: (id) => `department/${id}`,
    }),
    getAllDepartments: builder.query<IDepartment[], string>({
      query: (url = "") => `department`,
    }),
  }),
});

export const { useGetDepartmentByIdQuery, useGetAllDepartmentsQuery } =
  departmentsApi;
