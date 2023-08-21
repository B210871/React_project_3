
import styled from "styled-components"
import "../App.css"



export const Startgame = ({toggle}) => {
  return (
    <Container>
      <div>

     <img src="/images/dices.png" alt="dice" />
      </div>
       <div>
        <h1 style={{
          fontSize:"96px",
          whiteSpace:"nowrap"
        }}>DICE GAME</h1>
        <div style={{
          display:"flex",
          justifyContent:"end",

        }}>

        <Button onClick={toggle}>Play </Button>
        </div>
       </div>
    </Container>
  )
}


const Container = styled.div `
max-width:1180px;
display:flex;
margin:0 auto;
height:100vh;
align-items:center;
*{
    margin:0;
    padding:0;
}
`
const Button = styled.button `
display:flex;
padding:10px 18px;
color:white;
min-width:220px;
border:none;
border-radius:5px;
background:black;
font-size:16px;
cursor:pointer;
transition: 0.3s background ease-in;

&:hover{
  background-color:white;
  border:1px solid black;
  color:black;
  transition: 0.3s background ease-in;

}

`
