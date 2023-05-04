import React from 'react';
import { Button } from 'react-bootstrap';
import  Card  from './Card';

const List = () => (
    <div className='Contents' 
    style={{
        
        display : "flex",
        position : "fixed",
        height: "65vh", 
        width : "100%",
        top : "30vh",
        justifyContent: "center",
        alignitems: "center",
        background: "purple"}}> 
    
  
    <Card/>
    
    
    {/* <Button style={{blockSize : "40px"}} onClick={() => {}}>이전</Button>
    <Button style={{blockSize : "40px"}} onClick={() => {}}>다음</Button> */}
    </div>

        
);



export default List;