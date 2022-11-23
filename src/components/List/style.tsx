import styled from "styled-components";

export const BoxInput = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
gap: 5px;
`

export  const InputTask = styled.input`
width: 100%;
height: 25px;
color: #707070;
border: 1.8px solid #7161ef;
border-radius: 8px;
padding: 5px;
font-family: 'Gloria Hallelujah', cursive;
&:focus-within{
    outline: none;
    border-color:  #F87474;

    
}
&::placeholder{
    color: #5a5a5a;
    @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
    font-family: 'Gloria Hallelujah', cursive;
}


`
export const Button = styled.button`
color: white;
font-family: 'Gloria Hallelujah', cursive;
font-weight: bold;
background-color: #957fef;
width: 60px;
border: none;
border-radius: 8px;
&:hover{
    opacity: 0.7;
    cursor: pointer;
}

`

export const ButtonDelete = styled.button`
color: white;
font-family: 'Gloria Hallelujah', cursive;
font-weight: bold;
background-color: #F87474;
width: 80px;
padding: 7px;
border: none;
border-radius: 8px;
&:hover{
    background-color: #957fef;
    cursor: pointer;
}

`

export const DivTask = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 3px;
     
    
`