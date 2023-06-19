import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
function DefaultExample() {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <Link to="/Question1">1. Question </Link>
          </div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill></Badge>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <Link to="/Question2">2. Question</Link>
          </div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill></Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <Link to="/Question3">3. Question</Link>
          </div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill></Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <Link>4. Question</Link>
          </div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill></Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <Link>5. Question</Link>
          </div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill></Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <Link>6. Question</Link>
          </div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill></Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <Link>7. Question</Link>
          </div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill></Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default DefaultExample;
