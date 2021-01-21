import styled from "styled-components";

const Title = styled.p`
  margin: 0 auto;
  margin-top: 50px;
  font-size: 70px;
  background-color: white;
  width: 370px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const StartButton = styled.button`
  text-align: center;
  position: relative;
  top: 400px;
  width: 200px;
  height: 70px;
  font-size: 40px;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

const Span = styled.span`
  color: red;
`;

export const StartScreen = (props) => {
  return (
    <body className>
      <Title>
        双<Span>六</Span>ゲーム
      </Title>
      <ButtonContainer>
        <StartButton onClick={() => props.func()}>スタート</StartButton>
      </ButtonContainer>
    </body>
  );
};
