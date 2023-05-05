import React from 'react';
import "../font/font.css";

const Header = () => (
    <div className='Header' 
    style={{
        
        background: "yellow", 
        display : "flex",
        position : "fixed",
        height: "10vh", 
        width : "100%",
        top : "0px",
        justifyContent: "center",
        alignItems: "center",
       }}>
    
    
      
        <h2 style={{ fontSize: 20, color : "Black",marginTop : '40px', fontFamily: "font6" }}> [ Header ] logo TOMMORROW   </h2> 
    </div>

        
);



export default Header;