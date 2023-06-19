import styled from "@emotion/styled";

const ContainerDiv = styled.div`
  background-color: #e3ecf1;
`;

const ListBarDiv = styled.div`
  background-color: #3e5249;
  border-left: 2px solid grey;
  position: fixed;
  top: 9vh;
  bottom: 0;
  right: 0;
  color: #202020;
  height: 100%;
  z-index: 80;
  transition: 0.4s ease;
  box-sizing: content-box;

  .content {
    padding: 40px 40px 0 0;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    position: relative;
    left: -80px;
    top: 10px;
    width: 60px;
    height: 40px;
    transition: 0.8s ease;
    border: 2px solid #202020;
    border-radius: 40px;
    overflow: hidden;
    background-color: #3b4942d9;
    color: white;
    &:hover {
      background-color: black;
      color: white;
      border: 1px solid black;
    }
  }
`;

export { ContainerDiv, ListBarDiv };
