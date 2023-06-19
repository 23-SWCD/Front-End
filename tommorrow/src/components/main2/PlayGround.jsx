import React, { useState, useRef, useEffect } from "react";
import TableComponent from "./TableComponent";
import { ContainerDiv, PrDiv, TableDiv } from "./pg_css/pgCss";
import SqlQueryEditor from "./SqlQueryEditor";
import Listbar from "./Listbar";
import { Resizable } from "re-resizable";
import PrNav from "./PrNav";
import QueryResult from "./QueryResult";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import DefaultExample from "./QuestionList";
import { Icon } from "@blueprintjs/core";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
const headers = [
  "id",
  "student_age",
  "gender",
  "student_major",
  "student_name",
  "student_phone",
];
const data = [
  [1001, 20, "남성", "컴퓨터공학과", "홍길동", "010-1234-1234"],
  [1002, 20, "여성", "경영학과", "김영희", "010-4321-7258"],
  [1003, 24, "여성", "아트앤디자인학과", "박미선", "010-3323-5456"],
  [1004, 22, "남성", "영어영문학과", "김철소", "010-8593-4678"],
  [1005, 24, "남성", "국어국문학과", "김윤하", "010-4549-2538"],
];

function PlayGround() {
  const [isListbarOpen, setIsListbarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsListbarOpen(!isListbarOpen);
  };

  return (
    <>
      <Listbar onclick={toggleSidebar}>
        <div style={{ marginBottom: "100px" }}>
          <Icon icon="book" color="white" iconSize="70px" />
        </div>
        <DefaultExample />
        <div style={{ color: "white", marginTop: "50px" }}>
          <strong>1</strong> &nbsp;2&nbsp; 3
        </div>
      </Listbar>
      <div
        id="containerDiv"
        style={{
          display: "flex",
          position: "relative",
          padding: "9vh 0 3vh 0",
          width: isListbarOpen ? "calc(100% - 250px)" : "100%",
          flexDirection: "column",
          transition: "0.4s ease",
          height: "100vh",
        }}
      >
        <TableDiv style={{ flex: 1 }}>
          <TableComponent headers={headers} data={data} />
        </TableDiv>
        <Resizable
          defaultSize={{ width: "100%", height: "65%" }}
          minHeight={"10%"}
          maxHeight={"90%"}
          enable={{
            top: true,
            right: false,
            bottom: false,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
          handleStyles={{
            top: {
              width: "100%",
              height: "8px",
              top: "0px",
              backgroundColor: "#314f5dd9",
              borderTop: "4px double #0e0e0e",
            },
          }}
        >
          <PrDiv
            style={{
              marginTop: "8px",
              height: "calc(100% - 8px)",
            }}
          >
            <PrNav></PrNav>
            <div //container
              style={{
                width: "100%",
                height: "calc(100% - 55px)",
                display: "flex",
                borderLeft: "2px solid grey" /* 왼쪽 선 굵기와 색상 설정 */,
                borderRight: "2px solid grey" /* 오른쪽 선 굵기와 색상 설정 */,
                borderBottom: "2px solid grey" /* 아래쪽 선 굵기와 색상 설정 */,
              }}
            >
              <SqlQueryEditor />
              <QueryResult />
            </div>
          </PrDiv>
        </Resizable>
      </div>
    </>
  );
}
//<button className="run">RUN</button>
export default PlayGround;
