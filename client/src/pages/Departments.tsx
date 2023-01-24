import React from "react";
import { useGetAllDepartmentsQuery } from "../store";
import DepartmentList from "../components/DepartmentList";

const Departments = () => {
  const { data = [], isLoading } = useGetAllDepartmentsQuery("");

  console.log(data);

  return isLoading ? (
    <div>
      <h2>Loading...</h2>
    </div>
  ) : (
    <div className="d-flex flex-column gap-3 mt-3">
      <DepartmentList data={data} />
    </div>
  );
};

export default Departments;
