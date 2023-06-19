import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ContainerDiv = styled.div`
  display: flex;
  position: relative;
  padding-top: 9vh;
  width: 80vw;
  flex-direction: column;
`;

const TableDiv = styled.div`
  background: #e1e5ec;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: auto;

  table {
    border-collapse: collapse;
    border: 3px solid #ccc;
  }

  th,
  td {
    border: 3px solid #ccc;
    padding: 8px;
    text-align: left;
  }
`;
//테이블 디자인

const PrDiv = styled.div`
  background: white;
  display: flex;

  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  padding: 0 0px 0px 0px;
  align-items: center;
  z-index: 50;

  button {
    border-radius: 15px;
    padding: 5px 10px;
    font-weight: bold;
    &.run {
      background-color: white;
      color: black;
      border: 1px solid black;
      height: 50px;
      &:hover {
        background-color: black;
        color: white;
        border: 1px solid black;
      }
    }
  }
  textarea {
    height: 90%;
    width: 40%;
    border-radius: 10px;
    border: 1px solid #c6c6c6;
    padding: 10px;
    resize: none;
    overflow: auto;
    &:active,
    &:focus {
      outline: none;
    }
    &::-webkit-resizer {
      width: 12px;
      height: 12px;
      background-color: #555;
      position: absolute;
      top: -10px;
      cursor: nwse-resize;
    }
  }
`;
const PrNavDiv = styled.div`
  width: 100%;
  height: 55px;
  background-color: #314f5dd9;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  color: white;
  font-size: 20px;
  padding-left: 15px;
  Button {
    color: white;
  }
`;

const QueryResultDiv = styled.div`
  width: 50%;
  height: 100%;
  background-color: #1c1d1ddb;
  z-index: 1;
  display: flex;
`;

//연습하는 컴포넌트

export { PrDiv, TableDiv, ContainerDiv, PrNavDiv, QueryResultDiv };
