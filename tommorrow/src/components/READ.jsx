import Accordion from 'react-bootstrap/Accordion';

function AlwaysOpenExample() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{fontFamily:"font5"}}>Accordion Item #1111111111111111111111111@@@@@@@@@@@@@</Accordion.Header>
        <Accordion.Body style={{fontFamily:"font2"}}>
          설명 첫번째22222222222222
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header style={{fontFamily:"font5"}}>Accordion Item #21111111111111111111111@@@@@@@@@@@@@@</Accordion.Header>
        <Accordion.Body style={{fontFamily:"font2"}}>
          설명22222222222222222222222
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AlwaysOpenExample;