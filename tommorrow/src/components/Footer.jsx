import React from 'react';
import { Button } from 'react-bootstrap';
import "../font/font.css";

const Footer = () => (
    <div className='Footer' 
    style={{
        
        display : "flex",
        position : "fixed",
        height: "5vh", 
        width : "100%",
        bottom : "0px",
        justifyContent: "center",
        alignitems: "center",
        background: "#DDDDDD"}}>
        
        <h1 style={{ fontSize: 20, color : "white", fontFamily:"font1" }}> 
    [Footer] 2023, Tommorrow, 카피라이터 등  </h1>
    </div>

        
);



export default Footer;