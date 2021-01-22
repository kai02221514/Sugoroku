import styled from "styled-components";

const ChangeButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 200px;
  height: 70px;
  font-size: 40px;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

export const Change = (props) => {
  return <ChangeButton onClick={() => props.func()}>内容変更</ChangeButton>;
};
