import React, { useState, useRef, useEffect } from "react";
import TableComponent from "./TableComponent";
import { ContainerDiv, PrDiv, TableDiv } from "./pg_css/pgCss";
import SqlQueryEditor from "./SqlQueryEditor";
import Listbar from "./Listbar";
import { Resizable } from "re-resizable";

const headers = ["이름", "나이", "이메일"];
const data = [
  ["정진혁(명예소방관)", "25", "jjh@naver.com"],
  ["구민회(청소부)", "25", "kmh@example.com"],
  ["김동연(구두약)", "25", "kdy@example.com"],
  ["정회창(상무이사)", "25", "jhc@example.com"],
  ["김민기(쥐약)", "25", "kmk@example.com"],
];

function PlayGround() {
  const [isListbarOpen, setIsListbarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsListbarOpen(!isListbarOpen);
  };

  return (
    <>
      <Listbar onclick={toggleSidebar}>1</Listbar>
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
              borderTop: "3px solid #0e0e0e",
            },
          }}
        >
          <PrDiv
            style={{
              marginTop: "8px",
              height: "calc(100% - 8px)",
            }}
          >
            <div //play run navbar
              style={{
                width: "100%",
                height: "55px",
                backgroundColor: "#314f5dd9",
              }}
            ></div>
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
              <div //실행창
                style={{
                  width: "50%",
                  height: "100%",
                  backgroundColor: "#0c2836d9",
                  zIndex: "1",
                }}
              ></div>
            </div>
          </PrDiv>
        </Resizable>
      </div>
    </>
  );
}
//<button className="run">RUN</button>
export default PlayGround;
