import styled from "styled-components";

export const Button = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 18px;
gap: 10px;

width: 220px;
height: 44px;
background: black;
color: white;
border-radius: 5px;
border: none;
font-size: 16px;
transition: 0.5s background ease-in;
cursor: pointer;



&:hover{
    background-color: white;
    transition: 0.3s background ease-in;
    color: black;
    border: 1px solid black;
}
`;
export const Outline = styled(Button)`
border: 1px solid black;
background-color: white;
color: black;
&:hover{
    background-color: black;
    color: white;
    border: 1px solid transparent;
}
`;

