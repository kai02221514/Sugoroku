import styled from "styled-components";

const　Button = styled.button`
background-color: cornsilk;
height: 150px;
width: 150px;
position: absolute;
left: 20px;
bottom: 20px;
font-size: 30px;
`

function altRan2() {
    return(
        Math.floor(Math.random() * 6) + 1
    );
  }

const Saikoro = () => {
    return(
    <div>
    <form>
    <Button onClick={() => altRan2}>サイコロを振る</Button>
    </form>
    </div>
    )
}

export default Saikoro;


 