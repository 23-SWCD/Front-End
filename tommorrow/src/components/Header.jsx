import React from 'react';
import { Button } from 'react-bootstrap';

const Header = () => (
    <div className='Header' 
    style={{
        color : "yellowgreen",
        display : "flex",
        position : "fixed",
        height: "10vh", 
        width : "100%",
        top : "0px",
        justifyContent: "center",
        background: "yellow"}}>
        
       
        <h2> [ Header ] 로고와 웹명 작성 + CSS  </h2>
    </div>

        
);



export default Header;