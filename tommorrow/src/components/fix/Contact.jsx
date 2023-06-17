import React from "react";
import img from "../../img/cloud.png";
import "../../font/font.css";
import { ContactDiv, ImageContainer } from "./fixCss/contactCss";

function Contact() {
  return (
    <>
      <ImageContainer>
        <img alt="cloud" src={img} />
      </ImageContainer>
      <ContactDiv>
        <h2> TOMORROW </h2>
      </ContactDiv>
    </>
  );
}

export default Contact;
