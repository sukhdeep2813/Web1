
import { useState } from 'react';
import styled from 'styled-components';

 
const NumberSelecter = ({seterror, error,selectedNumber,setselectedNumber}) => {

const NumberArr = [1,2,3,4,5,6]; 
      
  const errorRemoverHandler = (value) => {
    setselectedNumber(value)
    seterror(" ");
  }  

  return (
      <NumberContainer > 
        <p style={{color:"red"}}>{error}</p>
        <div className='flex'> 
          {NumberArr.map((value,i) =>(
          <Box isSelected = {value == selectedNumber}
           key={i} onClick={()=>errorRemoverHandler(value)} >
            {value}
 
          </Box>

           ))}
       
       </div>
       <p>Select Number</p>
      </NumberContainer>
  )
}

export default NumberSelecter;


const Box = styled.div`
 height: 72px;
 width: 72px;
 border: 1px solid black;
 top: 200px;
 display: grid;
 place-content: center;
 font-size: 20px ;
 font-family: 'Lato', sans-serif;
 font-family: 'Roboto', sans-serif;
 cursor: pointer;
 background: ${(props) =>(props.isSelected)? "black" : "white"} ;
 color:${(props) =>(props.isSelected)? "#fff" : "#000"} ;


`;

const NumberContainer = styled.div`
 .flex{
  display: flex;
  gap: 24px;
 
}

 font-family: 'Roboto', sans-serif;
 align-items: end;
 flex-direction:column;
 display:flex;


`;
