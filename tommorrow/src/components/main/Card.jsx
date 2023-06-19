import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../../font/font.css";

import db1 from "../../img/db1.png";
import db2 from "../../img/db2.png";
import db3 from "../../img/db3.png";

function DB1(props) {
  return (
    <Card style={{ width: "25rem", height: "40vh" }}>
      <Card.Body>
        <Card.Title
          style={{ fontFamily: "font5", fontSize: "25px", color: "#C38154" }}
        >
          1
        </Card.Title>
        <Card.Text style={{ fontFamily: "font3" }}>학생과 교수</Card.Text>
        <Card.Img src={db1} style={{ height: "220px" }} />
        <Link to="/PlayGround">
          <Button
            variant="primary"
            style={{
              fontFamily: "font1",
              backgroundColor: "#C38154",
              border: "none",
              marginTop: "10px",
            }}
          >
            문제풀이
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

function DB2(props) {
  return (
    <Card style={{ width: "25rem", height: "40vh", marginLeft: "5vh" }}>
      <Card.Img variant="top" src="" />

      <Card.Body>
        <Card.Title
          style={{ fontFamily: "font5", fontSize: "25px", color: "#C38154" }}
        >
          2
        </Card.Title>
        <Card.Text style={{ fontFamily: "font3" }}>팀 게임</Card.Text>
        <Card.Img src={db2} style={{ height: "220px" }} />
        <Link to="/PlayGround">
          <Button
            variant="primary"
            style={{
              fontFamily: "font1",
              backgroundColor: "#C38154",
              border: "none",
              marginTop: "10px",
            }}
          >
            문제풀이
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

function DB3(props) {
  return (
    <Card style={{ width: "25rem", height: "40vh", marginLeft: "5vh" }}>
      <Card.Img variant="top" src="" />

      <Card.Body>
        <Card.Title
          style={{ fontFamily: "font5", fontSize: "25px", color: "#C38154" }}
        >
          3
        </Card.Title>
        <Card.Text style={{ fontFamily: "font3" }}>은행서비스 </Card.Text>
        <Card.Img src={db3} style={{ height: "220px" }} />
        <Link to="/PlayGround">
          <Button
            variant="primary"
            style={{
              fontFamily: "font1",
              backgroundColor: "#C38154",
              border: "none",
              marginTop: "10px",
            }}
          >
            문제풀이
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export { DB1, DB2, DB3 };
