import React from 'react'
import styled from "styled-components"
import { Button } from '../styled/Button'

export const Quit = ({toggle}) => {
  return (
    <Game>
        
        <Button onClick={toggle}>Quit Game</Button>
       

    </Game>
  )
}


const Game=styled.div`
max-width:1240px;
margin:0 auto;
margin-top:50px;
display:flex;
justify-content:end;
Button{
    background-color:red;
     margin-right:20px;

}

`
