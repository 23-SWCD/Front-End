import styled from "@emotion/styled";

const ContentsDiv = styled.div`
  background: "";
  display: flex;
  position: fixed;
  height: 15vh;
  width: 100%;
  top: 15vh;
  align-items: center;
  justify-content: center;
`;
const ListContainerDiv = styled.div`
  background: #11422bd9;
  display: flex;
  position: relative;
  height: 55vh;
  width: 100%;
  top: 40vh;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;
const ListDiv = styled.div`
  display: flex;
  position: relative;
  height: 55vh;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  z-index: 50;
`;

export { ContentsDiv, ListContainerDiv, ListDiv };
