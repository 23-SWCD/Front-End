import React from "react";
import "../../font/font.css";
import img from "../../img/cloud.png";
import SideBar from "./SideBar";
import Contact from "./Contact";
import HeaderDiv from "./fixCss/headerCss";

const Header = () => {
  return (
    <HeaderDiv>
      <SideBar width={300}>
        <Contact />
      </SideBar>
      <div
        style={{
          fontFamily: "font6",
          display: "flex",
          height: "70%",
        }}
      >
        <img alt="cloud" src={img} />
        <h2
          style={{
            fontSize: 20,
            color: "Black",
            marginTop: "2vh",
            fontFamily: "font6",
          }}
        >
          {" "}
          TOMORROW{" "}
        </h2>
      </div>
    </HeaderDiv>
  );
};

export default Header;
