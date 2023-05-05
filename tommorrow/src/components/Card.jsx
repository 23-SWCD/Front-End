import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../font/font.css";

function DB1() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src=""/>
     
      <Card.Body>
        <Card.Title style={{fontFamily:"font1"}}>첫번째 DB</Card.Title>
        <Card.Text style={{fontFamily:"font1"}}>
          첫 번째 DB입니다. 
        </Card.Text>
        <Button variant="primary" style={{fontFamily:"font1"}}>연습하기</Button>
      </Card.Body>
    </Card>
  );
}

function DB2() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src=""/>
     
      <Card.Body>
        <Card.Title >두번째 DB</Card.Title>
        <Card.Text>
          두 번째 DB입니다. 
        </Card.Text>
        <Button variant="primary">연습하기</Button>
      </Card.Body>
    </Card>
  );
}



export default DB1;