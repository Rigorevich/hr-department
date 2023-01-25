import React from "react";
import Employee from "./Employee";
import Table from "react-bootstrap/Table";
import { IDepartment, IEmployee } from "../types/types";

interface IEmployeeData {
  staff: IEmployee[];
}

const EmployeeList: React.FC<IEmployeeData> = ({ staff }) => {
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
          {staff.map((employee, order) => {
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
