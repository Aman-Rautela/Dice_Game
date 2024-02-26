import { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({seterror,error,selectedNumber, setSelectedNumber}) => {

    const array = [1,2,3,4,5,6];
    const selecthandelr = (value)=> {
      setSelectedNumber(value);
      seterror("");
    };
     return (
    <Numbercontainer>
      <p className="error">{error}</p>
      <div className="flex">
      {
            array.map((value,i )=> (<Box
              isSelected = {value == selectedNumber}
              key = {i}
            onClick={()=>selecthandelr(value)}
            >{value}
            
            </Box>))
        }
      </div>
      <p>
        Select Number
      </p>
    </Numbercontainer>
  )
}

export default NumberSelector

const Numbercontainer = styled.div`
.flex{
  display: flex;
  gap: 24px;
}
p{
  font-size: 24px;
  font-weight: 700px;
  text-align: end;
}
.error{
  color: red;
}

`;

const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color:${(props)=> (props.isSelected ? "black" : "white" )};
color:${(props)=> (props.isSelected ? "white" : "black" )};
`;