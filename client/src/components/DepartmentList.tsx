import React from "react";
import Department from "./Department";
import { IDepartment } from "../types/types";

interface IData {
  data: IDepartment[];
}

const DepartmentList: React.FC<IData> = ({ data }) => {
  return (
    <>
      {data.map((department) => {
        return <Department key={department.id} {...department} />;
      })}
      ;
    </>
  );
};

export default DepartmentList;
