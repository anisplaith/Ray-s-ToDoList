import styled from "styled-components";

interface Checked{
    doneTask?: any,
}

export const Container = styled.div<Checked>`
text-decoration: ${prop=> prop.doneTask?  'line-through #F87474': 'none'};
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
font-family: 'Gloria Hallelujah', cursive;
color: #5a5a5a;
margin: 0px;

`

export const Input = styled.input`
width: 20px;


`