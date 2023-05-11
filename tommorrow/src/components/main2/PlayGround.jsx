import React from "react";
import TableComponent from "./TableComponent";
import { ContainerDiv, PrDiv, TableDiv } from "./pg_css/pgCss";
import InputForm from "./InputForm";

const headers = ["이름", "나이", "이메일"];
const data = [
  ["정진혁", "25", "jjh@naver.com"],
  ["구민회", "25", "kmh@example.com"],
  ["김동연", "25", "kdy@example.com"],
];
function PlayGround() {
  return (
    <>
      <TableDiv>
        <TableComponent headers={headers} data={data} />
      </TableDiv>
      <PrDiv>
        <InputForm />
        <button className="run">RUN</button>
        <InputForm />
      </PrDiv>
    </>
  );
}

export default PlayGround;
