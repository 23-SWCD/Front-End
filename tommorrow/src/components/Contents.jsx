import React from 'react';
import READ from './READ'
import { Button } from 'react-bootstrap';

const Contents = () => (
    <div className='Contents' 
    style={{
        background:"blue",
        display : "flex",
        position : "fixed",
        height: "20vh", 
        width : "80vh",
        top : "10vh", 
       
        alignItems: "center",
        justifyContent: "center",
        }}>
    
        <READ/>
    </div>

        
);



export default Contents;