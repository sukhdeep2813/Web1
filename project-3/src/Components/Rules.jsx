import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
     <div>
           <h2>How to play dice game</h2>
           <div className='text'>
            <p>• Select any number. <br></br>• Click on dice image. <br></br>• After click on  dice  if selected number is equal to
             dice number you will get same point as dice.  <br></br>• If you get wrong guess then  1 point will be dedcuted.  </p>
           </div>
     </div>

    </RulesContainer>
  )
}

export default Rules;


const RulesContainer = styled.div`
background-color: #FBF1F1;
padding: 5px;
border-radius:10px;
margin-top: 25px;
h2{
  font-family: 'Lato', sans-serif;
font-family: 'Roboto', sans-serif;
position: relative;
left: 10px;

}

p{
  font-family: 'Lato', sans-serif;
}
.text{
  top: -10px;
  left: 10px;
  position: relative;
}
`;