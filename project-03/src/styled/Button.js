import styled from "styled-components"

export const Button = styled.button `
display:flex;
align-items:center;
justify-content:center;
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
export const OutlineButton = styled(Button) `
background-color:white;
border:1px solid black;
color:black;

&:hover{
  background-color:black;
  border:1px solid black;
  color:white;


}
`