import React from "react";
import { Button } from "react-bootstrap";
import "../../font/font.css";

const Footer = () => (
  <div
    className="Footer"
    style={{
      display: "flex",
      position: "fixed",
      height: "3vh",
      width: "100%",
      bottom: "0px",
      justifyContent: "center",
      alignitems: "center",
      background: "#DDDDDD",
      zIndex: "90",
    }}
  >
    <h1 style={{ fontSize: 15, color: "white", fontFamily: "font2" }}>
      [Footer] 2023, Tommorrow, 카피라이터 등{" "}
    </h1>
  </div>
);

export default Footer;
