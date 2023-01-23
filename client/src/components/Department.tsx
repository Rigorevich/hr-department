import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function Department() {
  const navigate = useNavigate();

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Бухгалтерия</Card.Title>
        <Card.Text>
          Учет движения и складирования материалов, сырья, готовых товаров, ГСМ
          и других активов.
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(`2`)}>
          Перейти на страницу отдела
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default Department;
