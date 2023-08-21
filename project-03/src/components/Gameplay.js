import React from 'react'
import { useState } from 'react';
import { TotalScore } from './TotalScore'
import { Numberselector } from './Numberselector'
import styled from 'styled-components';
import { Roledice } from './Roledice';
import { Roles } from './Roles';
import { Button ,OutlineButton} from '../styled/Button';
import { Quit } from './Quit';
export const Gameplay = ({toggle}) => {
   const [score, setScore] = useState(0);
    const [selectNumber, setSelectNumber] = useState()
    const [currentdice, setCurrentdice] = useState(1);
    const [error, setError] = useState();
    const [showroles, setShowroles] = useState(false);



   const ResetScore=()=>{
    setScore(0);
   }

    const getRandomArbitrary=(min, max) =>{
        // console.log(Math.floor(Math.random() * (max - min) + min));
        return Math.floor(Math.random() * (max - min) + min);
      }
      

      const Dice=()=>{
         if(!selectNumber)
         {
            return setError('You have not Selected a number')
         }
        
        const DiceNumber = getRandomArbitrary(1,7);
        console.log(DiceNumber)
        setCurrentdice(DiceNumber);
        if(selectNumber===DiceNumber){
           setScore((prev)=>prev+DiceNumber)
        }
        else{
            setScore((prev)=>prev-2);
        }
        setSelectNumber(undefined);
        
    }
    return (
        <> 
        <MainContainer>
            <Quit toggle={toggle}/>
            
       <div className="top_section">
       <TotalScore score={score}/>
       <Numberselector  setError={setError} error={error} setSelectNumber={setSelectNumber} selectNumber={selectNumber}/>
       </div>
       <Roledice Dice={Dice} currentdice={currentdice}/>
       <div className="btns">
        <OutlineButton onClick={ResetScore}>Reset</OutlineButton>
        <Button 
        onClick={()=>setShowroles((prev)=>!prev)}
        >{
            showroles?"Hide":"Show"
            
        } Roles</Button>
       </div>
       { showroles&& <Roles/>}

        
       
       
    </MainContainer>
    </>
  )
}

const MainContainer = styled.main`
.btns{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:10px;
    margin-top:40px;
}


.top_section{
    display:flex;
    align-items:end;
    padding-top:70px;
    max-width:1240px;
    margin:0 auto;
    justify-content:space-between;
}
`

