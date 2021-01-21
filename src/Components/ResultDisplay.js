import styled from "styled-components";

const Img = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 380px;
  left: 20px;
`;

export const ResultDisplay = (props) => {
  if (props.result === 0) return <Img src={"/1.png"} />;
  if (props.result === 1) return <Img src={"/2.png"} />;
  if (props.result === 2) return <Img src={"/3.png"} />;
  if (props.result === 3) return <Img src={"/4.png"} />;
  if (props.result === 4) return <Img src={"/5.png"} />;
  if (props.result === 5) return <Img src={"/6.png"} />;
};
