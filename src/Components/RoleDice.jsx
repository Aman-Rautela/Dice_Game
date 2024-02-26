import { useState } from "react";
import styled from "styled-components";
const RoleDice = ({currentDice, roll}) => {



  return (
    <DiceContainer>
   <div className="dice"
   onClick={roll}
   >
    <img src={`/images/${currentDice}.png`}  alt="dicec 1"/>
    </div>
    <p>
        Click on Dice to roll
    </p>
    </DiceContainer>
  )
};

export default RoleDice;

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;
p{
    font-size: 24px;
}
.dice{
    cursor: pointer;
}
`;