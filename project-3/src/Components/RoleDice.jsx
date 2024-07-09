import React, { useState } from 'react'
import styled from "styled-components"  

const RoleDice = ({roleDice,DiceNumber}) => {
 
    
 
  return (
    <DiceContainer>  
        <div className='Dice'>   
            <img onClick={roleDice} src={`images/Dice_group/dice_${DiceNumber}.png`}>

            </img>
            <p>Click on Dice to roll</p>
            
       </div>
   
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
  
   height:301px;
   width: 250px;
   margin-top:45px;
   margin-left: 40%;
      
  p{
    margin-left: 65px;
    margin-top: -5px;
  }
`;