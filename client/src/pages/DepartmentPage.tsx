import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetDepartmentByIdQuery,
  useGetStaffByDepartmentQuery,
} from "../store";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import EmployeeList from "../components/EmployeeList";

const DepartmentPage: React.FC = () => {
  const { id } = useParams();
  const { data: department, isLoading } = useGetDepartmentByIdQuery(id!);
  const { data: staff = [] } = useGetStaffByDepartmentQuery(id!);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Container className="d-flex flex-column gap-2 mt-5">
      <div>Название отдела: {department?.name}</div>
      <div>Описание: {department?.description} </div>
      <div>Глава отдела:</div>
      <div className="d-flex gap-4">
        <Button variant="success">Добавить сотрудника</Button>
        <Button variant="primary">Редактировать отдел</Button>
        <Button variant="danger">Удалить отдел</Button>
      </div>
      <EmployeeList staff={staff} />
    </Container>
  );
};

export default DepartmentPage;
