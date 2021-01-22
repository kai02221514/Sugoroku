import "./App.css";
import { StartScreen } from "./Components/StartScreen";
import { useState } from "react";
import { Saikoro } from "./Components/Saikoro";
import { ResultDisplay } from "./Components/ResultDisplay";
import { Form } from "./Components/Form";
import { Event } from "./Components/Event";
import styled from "styled-components";
import { Change } from "./Components/Change";

const H1 = styled.h1`
  text-align: center;
  position: relative;
  top: 220px;
`;

const Button = styled.button`
  position: relative;
  left: 460px;
  bottom: 75px;
  height: 40px;
  width: 100px;
  font-size: 30px;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

function App() {
  const [game, setGame] = useState("gamephase1");
  const [result, setResult] = useState(7);
  const [happens, setHappens] = useState([]);

  const addHappen = (happen) => {
    if (happens.length < 6) {
      setHappens([...happens, happen]);
    }
  };

  const change = () => {
    setGame("gamephase1");
    setHappens([]);
    setResult(7);
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
    setResult(number);
  };

  return (
    <div>
      {game === "gamephase1" ? (
        <div>
          {happens.length < 6 ? (
            <H1>あと{6 - happens.length}つ</H1>
          ) : (
            <H1>これ以上追加できません</H1>
          )}
          <StartScreen func={start} />
          <Form onAddHappen={addHappen} />
          <Button onClick={() => Delete()}>削除</Button>
          {<Event happens={happens} fontSize="20" Number={result} Top="0" />}
        </div>
      ) : (
        <div>
          <Change func={change} />
          <Event happens={happens} fontSize="100" Number={result} Top="10" />
          <Saikoro func={altRan2} />
          <ResultDisplay result={result} />
        </div>
      )}
    </div>
  );
}

export default App;
