import { configureStore } from "@reduxjs/toolkit";
import { departmentsApi } from "./slices/departmentAPISlice";
import { employeeApi } from "./slices/employeeAPISlice";

export const store = configureStore({
  reducer: {
    [departmentsApi.reducerPath]: departmentsApi.reducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      departmentsApi.middleware,
      employeeApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
