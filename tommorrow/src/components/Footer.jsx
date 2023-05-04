import React from 'react';
import { Button } from 'react-bootstrap';

const Footer = () => (
    <div className='Footer' 
    style={{
        color : "green",
        display : "flex",
        position : "fixed",
        height: "5vh", 
        width : "100%",
        bottom : "0px",
        justifyContent: "center",
        background: "yellow"}}>
        <h1> 
    [Footer] 제작 날짜 표시, 팀명 소개, 카피라이터 등  </h1>
    </div>

        
);



export default Footer;