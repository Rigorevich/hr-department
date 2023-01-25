import React from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import DepartmentList from "../components/DepartmentList";
import Button from "react-bootstrap/Button";
import LoadingSpin from "../components/LoadingSpin";

import { useGetAllDepartmentsQuery } from "../store";

const Departments = () => {
  const { data = [], isLoading } = useGetAllDepartmentsQuery("");

  return isLoading ? (
    <LoadingSpin />
  ) : (
    <Container className="d-flex flex-column gap-3 mt-3">
      <div className="d-flex gap-4 mb-1">
        <Button variant="success">Добавить отдел</Button>
        <Button variant="danger">Удалить отдел</Button>
      </div>
      <DepartmentList data={data} />
    </Container>
  );
};

export default Departments;
