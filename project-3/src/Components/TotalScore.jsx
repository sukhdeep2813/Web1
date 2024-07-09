import React from 'react'
import styled from 'styled-components';

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
           <div>
            <h1>{score}</h1>
            <p>Total Score</p>
           </div>
    </ScoreContainer>
  )
}

export default TotalScore;


const ScoreContainer = styled.div`
   h1{
     font-size:100px;
     left: 25px;
     position: relative;
     font-weight:100;
   }
   
  p{
    margin-top: -70px;
    font-size: 25px ;
    font-weight:500px;
  }

  padding-left:40px;
  margin-top:-90px;
  font-family: 'Lato', sans-serif;
  font-family: 'Roboto', sans-serif;
  
  

`;