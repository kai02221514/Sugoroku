import styled from "styled-components";

const Div = styled.div`
  position: relative;
  top: 10px;
  left: 400px;
  font-size: ${(props) => props.fontSize}px;
`;

export const Event = ({ happens, fontSize }) => {
  return (
    <div>
      {happens.map((event, index) => {
        return (
          <Div key={index} fontSize={fontSize}>
            {event}
          </Div>
        );
      })}
    </div>
  );
};
