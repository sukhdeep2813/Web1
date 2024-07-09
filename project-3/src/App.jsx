import React from 'react'
import Homepage from './Components/Homepage'
import { useState } from 'react'
import GamePlay from './Components/GamePlay';
import Rules from './Components/Rules';


function App (){

  const[isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () =>{
    setIsGameStarted((prev) => !prev);
  }
  return (
    <div>

      {isGameStarted ? <GamePlay/>: <Homepage toggle ={toggleGamePlay}/>}
     
    </div>
  )
}

export default App;