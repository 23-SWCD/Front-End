import React from "react";
import "../../font/font.css";
import img from "../../img/cloud.png";
import SideBar from "./SideBar";
import Contact from "./Contact";
import HeaderDiv from "./fixCss/headerCss";
const Header = () => (
  <HeaderDiv>
    <SideBar width={300}>
      <Contact />
    </SideBar>
    <img alt="cloud" src={img} />
    <h2
      style={{
        fontSize: 20,
        color: "Black",
        marginTop: "40px",
        fontFamily: "font6",
      }}
    >
      {" "}
      TOMMORROW{" "}
    </h2>
  </HeaderDiv>
);

export default Header;
