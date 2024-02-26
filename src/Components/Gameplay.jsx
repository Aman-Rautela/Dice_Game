import styled from "styled-components";
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, Outline } from "../Styled/Button";
import Rules from "./Rules";

const Gameplay = () => {

const [score, setscore] = useState(0);
const [showrules, setshowrules] = useState(false);

  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const[error, seterror] = useState("");

  const randomNumber = (min, max) => {
    return Math.floor(Math.random()*(max- min)+min);
};

const roll = () =>{
if(!selectedNumber){
  seterror("Please select a number to roll.")
  return;
}
const random =randomNumber(1, 7);
setcurrentDice((prev) => random);
if(selectedNumber == random){
  setscore(prev => prev + random);
}else{
  setscore(prev => prev - 2);
}

setSelectedNumber(undefined);

};
const resetScore = () =>{
  setscore(0);
}



  return (
    <Maincontainer>
      <div className="top">
      <TotalScore 
      score = {score}
      />
        <NumberSelector 
        error = {error}
        seterror={seterror}
        selectedNumber = {selectedNumber}
        setSelectedNumber = {setSelectedNumber}
        />
      </div>
      <RoleDice 
      currentDice = {currentDice}
      roll = {roll}
      />
      <div className="btns">
        <Outline
        onClick={resetScore}
        >Reset Score</Outline>
        <Button
        onClick={() => setshowrules(prev => !prev)}
        >
          {showrules ? "Hide" : "Show"}
          Show Rules</Button>
      </div>
     {showrules && <Rules />}
    </Maincontainer>
  )
};


export default Gameplay

const Maincontainer = styled.div`

.top{
  display: flex;
  justify-content: space-around;
  align-items: end;
}
.btns{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 40px;
}

`;