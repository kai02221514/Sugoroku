import styled from "styled-components";

const Li = styled.li`
  position: relative;
  top: ${(props) => props.Top}px;
  left: 400px;
  font-size: ${(props) => props.fontSize}px;
  :nth-child(${(props) => props.Number}) {
    color: red;
  }
`;

export const Event = ({ happens, fontSize, Number, Top }) => {
  return (
    <div>
      <ol>
        {happens.map((event, index) => {
          return (
            <Li key={index} fontSize={fontSize} Number={Number} Top={Top}>
              {event}
            </Li>
          );
        })}
      </ol>
    </div>
  );
};
