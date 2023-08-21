// import styled from "styled-components";
import { Startgame } from "./components/Startgame";
import { Gameplay } from "./components/Gameplay";
import { useState } from "react";

function App() {

  const  [isGamePlay, setIsGamePlay] = useState(true)

  const toggleGamePlay=()=>{
    setIsGamePlay((prev)=>!prev)
  }
  return (
  <>

  {
    isGamePlay?<Gameplay toggle={toggleGamePlay}/>:<Startgame toggle={toggleGamePlay}/>
  }
  
  
  </>
  );
}

export default App;
