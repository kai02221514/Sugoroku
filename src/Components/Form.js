import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
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
          <input
            type="text"
            value={text}
            onChange={(a) => setText(a.target.value)}
          />
        </div>
        <div>
          <button>追加</button>
        </div>
      </form>
    </Div>
  );
};
