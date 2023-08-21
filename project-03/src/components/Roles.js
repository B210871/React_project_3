import React from 'react'
import { styled } from 'styled-components'

export const Roles = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>Select any Number</p>
            <p>Click on dice image</p>
            <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
            <p>if you get wrong guess then 2 point wiil be deducted</p>
        </div>
    </RulesContainer>
  )
}


const RulesContainer=styled.div`
background-color:#fbf1f1;
max-width:800px;
margin:40px auto;
border-radius:10px;
padding:20px;
h2{
    font-size:24px;
}
text{
    margin-top:24px;

}
`