import React from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

interface IEmployee {
  order: number;
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  position: string;
  startDate: Date;
}

const Employee: React.FC<IEmployee> = ({
  order,
  id,
  name,
  surname,
  patronymic,
  position,
  startDate,
}) => {
  const navigate = useNavigate();
  return (
    <tr onClick={() => navigate(`${id}`)}>
      <td>{order}</td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{patronymic}</td>
      <td>{position}</td>
    </tr>
  );
};

export default Employee;
