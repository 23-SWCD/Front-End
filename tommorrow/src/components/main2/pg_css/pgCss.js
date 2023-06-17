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
  background: #11422bd9;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: auto;


  table {
    border-collapse: collapse;
    border: 2px solid #ccc;v
  }

  th,
  td {
    border: 1px solid #ccc;
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
//연습하는 컴포넌트

export { PrDiv, TableDiv, ContainerDiv };
