import "./App.css";
import { StartScreen } from "./Components/StartScreen";
import { useState } from "react";
import { Saikoro } from "./Components/Saikoro";
import { ResultDisplay } from "./Components/ResultDisplay";

function App() {
  const [game, setGame] = useState("gamephase1");
  const [result, setResult] = useState(0);

  const start = () => {
    setGame("gamephase2");
  };

  const altRan2 = () => {
    setResult(result + Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div>
      {game === "gamephase1" ? (
        <StartScreen func={start} />
      ) : (
        <div>
          <Saikoro func={altRan2} />
          <ResultDisplay result={result % 6} />
        </div>
      )}
    </div>
  );
}

export default App;
