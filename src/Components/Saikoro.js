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

export const Saikoro = (props) => {
    return(
    <div>
    <Button onClick={() => props.func()}>サイコロを振る</Button>
    </div>
    )
}



 