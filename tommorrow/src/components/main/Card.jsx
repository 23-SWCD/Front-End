import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../../font/font.css";

function DB1(props) {
  return (
    <Card style={{ width: "18rem", height: "40vh" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title style={{ fontFamily: "font1" }}>첫번째 DB</Card.Title>
        <Card.Text style={{ fontFamily: "font1" }}>첫 번째 DB입니다.</Card.Text>
        <Link to="/PlayGround">
          <Button variant="primary" style={{ fontFamily: "font1" }}>
            테스트페이지
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

function DB2(props) {
  return (
    <Card style={{ width: "18rem", height: "40vh" }}>
      <Card.Img variant="top" src="" />

      <Card.Body>
        <Card.Title>두번째 DB</Card.Title>
        <Card.Text>두 번째 DB입니다.</Card.Text>
        <Button variant="primary">연습하기</Button>
      </Card.Body>
    </Card>
  );
}

function DB3(props) {
  return (
    <Card style={{ width: "18rem", height: "40vh" }}>
      <Card.Img variant="top" src="" />

      <Card.Body>
        <Card.Title>세번째 DB</Card.Title>
        <Card.Text>세 번째 DB입니다.</Card.Text>
        <Button variant="primary">연습하기</Button>
      </Card.Body>
    </Card>
  );
}

export { DB1, DB2, DB3 };
