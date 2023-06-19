// import React from 'react';
// import Accordion from 'react-bootstrap/Accordion';

// function AlwaysOpenExample() {
//   return (
//     <Accordion defaultActiveKey={['0']} alwaysOpen>
//       <Accordion.Item eventKey="0">
//         <Accordion.Header style={{ fontFamily: 'font5', backgroundColor: 'lightblue' }}>
//           1. SQL 학습 웹앱사이트 설명
//         </Accordion.Header>
//         <Accordion.Body style={{ fontFamily: 'font2', color: 'white', backgroundColor: 'lightblue' }}>
//           설명 첫번째22222222222222
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header style={{ fontFamily: 'font5', backgroundColor: 'lightblue' }}>
//           2. 사용자를 위한 가이드라인
//         </Accordion.Header>
//         <Accordion.Body style={{ fontFamily: 'font2', color: 'white', backgroundColor: 'lightblue' }}>
//           설명22222222222222222222222
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//   );
// }

// export default AlwaysOpenExample;

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
function LeftTabsExample() {
  return (
    <>
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={10}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link
                    style={{
                      backgroundColor: "#082e1bad",
                      color: "white",
                      marginBottom: "5px",
                      width: "30vh",
                    }}
                    eventKey="first"
                  >
                    1. SQL 학습 사이트 설명서
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    style={{
                      backgroundColor: "#082e1bad",
                      color: "white",
                      width: "30vh",
                    }}
                    eventKey="second"
                  >
                    2. 사용자 가이드라인
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <br /> 이 사이트는 웹 환경에서 SQL을 학습할 수 있도록 구성하는
                  웹 프로젝트로 SQL입문자들이 SQL 구문을 테스트 할 수 있도록
                  도움을 제공합니다.
                  <br />
                  직접 데이터 베이스를 구축하지 않고 DB를 구현하여서 복잡한
                  과정이 불필요합니다.{" "}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <br /> 사용자는 아래 여러 DB 중 원하는 DB를 선택하고 문제 풀이
                  버튼을 클릭하여 문제 실행 화면 페이지로 넘어가서 학습할 수
                  있습니다.
                  <br />{" "}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <div
        style={{
          position: "fixed",
          top: "120px",
          right: "10px",
        }}
      ></div>
    </>
  );
}

export default LeftTabsExample;
