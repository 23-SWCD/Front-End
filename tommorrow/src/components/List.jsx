import React from 'react';
import { Button } from 'react-bootstrap';
import  {DB1, DB2, DB3}  from './Card';

const List = () => (
    <div className='Contents' 
    style={{
        background: "green",
        display : "flex",
        position : "fixed",
        height: "55vh", 
        width : "100%",
        top : "40vh",
        justifyContent: "center",
        padding : "10px", 
       
        alignitems: "center"
        }}> 
    

    
    <DB1 />
    <DB2 />
    <DB3 />
   
    {/* <Button style={{blockSize : "40px"}} onClick={() => {}}>이전</Button>
    <Button style={{blockSize : "40px"}} onClick={() => {}}>다음</Button> */}
    </div>

        
);



export default List;