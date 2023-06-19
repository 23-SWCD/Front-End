import React from "react";
import "../../font/font.css";
import img from "../../img/tree.png";
import SideBar from "./SideBar";
import Contact from "./Contact";
import HeaderDiv from "./fixCss/headerCss";
import Login from "../User/Login";
import { Link } from "react-router-dom";

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
        <img style={{ padding: ".4rem .80rem" }} alt="cloud" src={img} />

        <Link
          to="/"
          style={{
            color: "black",
            fontSize: 20,
            marginTop: "2vh",
            fontFamily: "font6",
            fontFamily: "font6",
          }}
        >
          TOMORROW
        </Link>
      </div>
      <div
        style={{
          position: "relative",
          left: "18.75rem",
          display: "flex",
        }}
      ></div>
    </HeaderDiv>
  );
};

export default Header;
