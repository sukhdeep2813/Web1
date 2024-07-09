import React from 'react'
import TotalScore from './TotalScore';
import NumberSelecter from './NumberSelecter';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { useState } from 'react';
import { Button } from '../styled/Button';
import Rules from './Rules';



const GamePlay = () => {
  const[error, seterror] = useState();
  const [score, setScore] = useState(0);
  const [selectedNumber,setselectedNumber] = useState(false);
  const [DiceNumber,setDiceNumber] = useState(1);
  const [showRules, setShowRules] = useState(false);

 
  const GenerateDiceNumber = (min,max) => {
    return Math.floor(Math.random()*(max-min)+min);
    
  }

    const roleDice =() =>{
    const RandomNumber = GenerateDiceNumber(1,7)
    setDiceNumber((prev) =>RandomNumber);

    if(!selectedNumber) {
    seterror("You have not select any number");
   
    
    return
    }
    if(selectedNumber == RandomNumber){
      setScore((prev) => prev  + RandomNumber)
    }else{
      setScore((prev) => prev -1)
    }

     setselectedNumber(undefined)
    };

    const reset  = () => {
      setScore(0)
     
    }
  
    
  return (
    <MainContainer>
      
       <div className="top_section">
        <TotalScore score ={score}></TotalScore>
        <NumberSelecter
         error ={error} 
         seterror = {seterror}
         selectedNumber= {selectedNumber}
         setselectedNumber ={setselectedNumber}
        ></NumberSelecter>

       </div>
        <RoleDice
        
        DiceNumber ={DiceNumber}
        roleDice ={roleDice}
        ></RoleDice>
        <div className='btn' >
        <Button onClick={reset}>Reset</Button>
        <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
        </div>
        
          {showRules && <Rules/>}
        
        
    </MainContainer>
  )
}

export default GamePlay;



const MainContainer =styled.div`

.top_section{
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:50px;
  max-width: 1480px;
  
}
.btn{
  display: grid;
  margin-left:624px ;
  gap: 20px;
 
}


  
`;
