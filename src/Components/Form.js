import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  font-size: 20px;
`;

const Button = styled.button`
  height: 40px;
  width: 100px;
  font-size: 30px;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

export const Form = ({ onAddHappen }) => {
  const [text, setText] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    onAddHappen(text);
  };

  return (
    <Div>
      <h1>イベント追加</h1>
      <form onSubmit={submitForm}>
        <div>
          <Input
            type="text"
            value={text}
            onChange={(a) => setText(a.target.value)}
          />
        </div>
        <div>
          <Button>追加</Button>
        </div>
      </form>
    </Div>
  );
};
