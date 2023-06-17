import styled from "@emotion/styled";

const ContainerDiv = styled.div`
  background-color: #e3ecf1;
`;

const SideBarDiv = styled.div`
  background-color: #11422bf5;
  border-right: 5px double #323030;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: 0.4s ease;
  color: #202020;
  height: 100%;
  z-index: 99;

  .content {
    padding: 40px 40px 0 20px;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    position: relative;
    left: 330px;
    top: 20px;
    width: 40px;
    height: 40px;
    transition: 0.8s ease;
    border: 2px solid #202020;
    border-radius: 40px;
    overflow: hidden;
  }
  .openBtn {
    width: 100%;
    height: 100%;
  }
`;

export { ContainerDiv, SideBarDiv };
