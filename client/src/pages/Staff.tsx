import React from "react";
import { useGetStaffQuery } from "../store/slices/employeeAPISlice";
import Table from "react-bootstrap/Table";
import Employee from "../components/Employee";
import EmployeeList from "../components/EmployeeList";

const Staff = () => {
  const { data = [], isLoading } = useGetStaffQuery("");

  return isLoading ? (
    <div>
      <h3>Loading...</h3>
    </div>
  ) : (
    <EmployeeList data={data} />
  );
};

export default Staff;
