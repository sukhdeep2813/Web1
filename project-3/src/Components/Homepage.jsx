import React from 'react'
import styled from "styled-components"
 

const Homepage = ({toggle}) => {
  return (
    <Container>
      <div >
        <img src='images\dices 1.png'></img>
       </div>
             

     <div classname ="content">
        <h1>Dice Game</h1>
        <Button onClick = {toggle}>Play Now</Button>
     </div>
    
    </Container>
   
  )

}


export default Homepage;



const Container = styled.div`


max-width: 1180px;
font-family: 'Lato', sans-serif;
font-family: 'Roboto', sans-serif;
margin: 0 auto;
display: flex;
align-items: center;
top: 90px;
left: 40px;
position: relative;
 .content h1{
  font-size: 96px;
 }


`;

const Button = styled.button`
width: 220px;
height:44px;
background: #000;
color: #fff;
border-radius: 5px;
border: 3px solid black;
font-family: 'Lato', sans-serif;
font-family: 'Roboto', sans-serif;
transition: 0.5s;
cursor: pointer;

 &:hover{
background: #fff;
color: #000;

 }

`;