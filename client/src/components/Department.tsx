import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { IDepartment } from "../types/types";
import React from "react";

const Department: React.FC<IDepartment> = ({
  id,
  name,
  description,
  bossId,
  createdAt,
}) => {
  const navigate = useNavigate();

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={() => navigate(`${id}`)}>
          Перейти на страницу отдела
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">{createdAt.toString()}</Card.Footer>
    </Card>
  );
};

export default Department;
