import React from "react";
import EmployeeList from "../components/EmployeeList";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import LoadingSpin from "../components/LoadingSpin";

import { useGetStaffQuery } from "../store";

const Staff = () => {
  const { data = [], isLoading } = useGetStaffQuery("");

  return isLoading ? (
    <LoadingSpin />
  ) : (
    <Container className="mt-3">
      <div className="d-flex gap-4 mb-3">
        <Button variant="success">Добавить сотрудника</Button>
        <Button variant="primary">Редактировать данные сотрудника</Button>
        <Button variant="danger">Удалить сотрудника из системы</Button>
      </div>
      <EmployeeList staff={data} />
    </Container>
  );
};

export default Staff;
