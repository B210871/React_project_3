
import styled from 'styled-components';

export const Numberselector = ({setError,selectNumber,setSelectNumber,error,toggle}) => {

    const arrayNumber=[1,2,3,4,5,6];
   
    console.log(selectNumber);

    const selectNumberHandler=(value)=>{
        setSelectNumber(value)
        setError(" ")
    }

    return (<>
    
        <NumberselectorContainer>
            <h3>{error}</h3>
        <div className="flex">
        {arrayNumber.map((value,index)=>{
            return (
                
                <Box isSelected={value === selectNumber} key={index} onClick={()=>selectNumberHandler(value)}>{value}</Box>
                )
            })}
        </div>
        <p>Select Number </p>
            
      
    </NumberselectorContainer>
    </>
  )
}
const Box = styled.div` 
width:72px;
height:72px;
border:1px solid black;
display:grid;
place-items:center;
font-size:24px;
font-weight:700;
background-color:${(props)=>props.isSelected?"black":"white"};
color:${(props)=>!props.isSelected?"black":"white"};
`

const NumberselectorContainer= styled.div`
display:flex;
flex-direction:column;
align-items:end;
*{
    margin:0;
    padding:0;
}
h3{
    color:red;
}

.flex{
    display:flex;
    gap:24px;
}
p{
    font-size:24px;
    font-weight:700;
}
`