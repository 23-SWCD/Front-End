import React from 'react';
import READ from './READ'

import { Button } from 'react-bootstrap';

const Contents = () => (
    <div className='Contents' 
    style={{
        background:"yellow",
        display : "flex",
        position : "fixed",
        height: "20vh", 
        width : "50vh",
        top : "10vh",
        left : "30%",
        alignItems: 'center',
        justifyContent: "center",
        }}>
    
        <READ/>
    </div>

        
);



export default Contents;