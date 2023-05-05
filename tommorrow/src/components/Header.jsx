import React from 'react';
import "../font/font.css";
import img from '../img/cloud.png'
const Header = () => (
    <div className='Header' 
    style={{
        
        background: "", 
        display : "flex",
        position : "fixed",
        height: "12vh", 
        width : "100%",
        top : "15px",
        justifyContent: "center",
        alignItems: "center",
       }}>
    
    
     <img alt="cloud" src={img} /> 
     <h2  style={{ fontSize: 20, color : "Black",marginTop : '40px', fontFamily: "font6" }}> TOMMORROW   </h2> 
    </div>

        
);



export default Header;