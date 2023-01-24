import React from "react";
import Employee from "./Employee";
import Table from "react-bootstrap/Table";
import { IEmployee } from "../types/types";

interface IEmployeeData {
  data: IEmployee[];
}

const EmployeeList: React.FC<IEmployeeData> = ({ data }) => {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Отчество</th>
            <th>Должность</th>
            <th>Отдел</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee, order) => {
            return (
              <Employee key={employee.id} order={order + 1} {...employee} />
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default EmployeeList;
