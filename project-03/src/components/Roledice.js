
import styled from 'styled-components';

export const Roledice = ({currentdice,Dice}) => {

    

   


  return (
    <DiceContainer>
  <div className='dice'>
    <img src={`/images/dice/dice_${currentdice}.png`} 
    onClick={Dice}
    alt="dice" />
  </div>
  <p>
    Click on Dice to roll
  </p>

    </DiceContainer>
  )
}

const DiceContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:48px;
*{
    margin:0;
    padding:0;
}
.dice{
    cursor:pointer;
}

p{
    font-size:24px;
}

`
