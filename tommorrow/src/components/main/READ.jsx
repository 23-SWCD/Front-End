import Accordion from 'react-bootstrap/Accordion';

function AlwaysOpenExample() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{fontFamily:"font5"}}>1. SQL 학습 웹앱사이트 설명</Accordion.Header>
        <Accordion.Body style={{fontFamily:"font2"}}>
          설명 첫번째22222222222222
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header style={{fontFamily:"font5"}}>2. 사용자를 위한 가이드라인 </Accordion.Header>
        <Accordion.Body style={{fontFamily:"font2"}}>
          설명22222222222222222222222
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AlwaysOpenExample;