import { useState } from "react";
import Startgame from "./Components/startgame";
import Gameplay from "./Components/Gameplay";

function App() {

  const [isGameStarted, setGameStarted] = useState(false);

  const toggleGamePlay= () =>{
    setGameStarted((prev) => !prev);
  };

  return (
    <>

    {

      isGameStarted ? <Gameplay /> : <Startgame toggle = {toggleGamePlay} />

    };
    </>
  );
}

export default App;
