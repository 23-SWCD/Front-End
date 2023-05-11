import React from "react";
import { Button } from "react-bootstrap";
import { DB1, DB2, DB3 } from "./Card";
import { ListDiv } from "./css/mainCss";
import { ListContainerDiv } from "./css/mainCss";
const List = () => (
  <ListContainerDiv>
    <ListDiv>
      <DB1 />
      <DB2 />
      <DB3 />
    </ListDiv>

    {/* <Button style={{blockSize : "40px"}} onClick={() => {}}>이전</Button>
    <Button style={{blockSize : "40px"}} onClick={() => {}}>다음</Button> */}
  </ListContainerDiv>
);

export default List;
