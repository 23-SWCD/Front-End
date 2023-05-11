import styled from "@emotion/styled";

const ContainerDiv = styled.div`
  display: flex;
  position: relative;
  top: 50vh;
`;

const TableDiv = styled.div`
  background: "";
  display: flex;
  position: relative;
  height: 39vh;
  width: 100%;
  padding-top: 9vh;
  align-items: center;
  justify-content: center;

  table {
    border-collapse: collapse;
    border: 2px solid #ccc;
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
  background: #11422bd9;
  display: flex;
  position: relative;
  height: 55vh;
  width: 100%;
  justify-content: space-evenly;
  padding: 10px;
  align-items: center;
  resize: vertical;
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
    height: 35vh;
    width: 60vh;
    border-radius: 10px;
    border: 1px solid #c6c6c6;
    padding: 10px;
    resize: both;
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
