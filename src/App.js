import "./App.css";
import { StartScreen } from "./Components/StartScreen";
import { useState } from "react";
import { Saikoro } from "./Components/Saikoro";
import { ResultDisplay } from "./Components/ResultDisplay";
import { Form } from "./Components/Form";
import { Event } from "./Components/Event";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
  position: relative;
  top: 200px;
`;

const Button = styled.button`
  position: relative;
  left: 600px;
  bottom: 50px;
`;

function App() {
  const [game, setGame] = useState("gamephase1");
  const [result, setResult] = useState(0);
  const [happens, setHappens] = useState([]);

  const addHappen = (happen) => {
    if (happens.length < 6) {
      setHappens([...happens, happen]);
    }
  };

  const Delete = () => {
    happens.pop();
    setHappens([...happens]);
  };

  const start = () => {
    setGame("gamephase2");
  };

  const altRan2 = () => {
    let number = Math.floor(Math.random() * 6) + 1;
    setResult(result + number);
  };

  return (
    <div>
      {game === "gamephase1" ? (
        <div>
          {happens.length < 5 ? (
            <H1>あと{6 - happens.length}つ</H1>
          ) : (
            <H1>これ以上追加できません</H1>
          )}
          <StartScreen func={start} />
          <Form onAddHappen={addHappen} />
          <Button onClick={() => Delete()}>削除</Button>
          {<Event happens={happens} fontSize="20" />}
        </div>
      ) : (
        <div>
          <Event happens={happens} fontSize="50" />
          <Saikoro func={altRan2} />
          <ResultDisplay result={result % 6} />
        </div>
      )}
    </div>
  );
}

export default App;
