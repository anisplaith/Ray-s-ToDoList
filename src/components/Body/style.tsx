import React from 'react'
import styled from 'styled-components' // yarn add @types/styled-components e yarn add styled-components

interface Selected {
    cliked: boolean

}

export const Menu = styled.div`
  display: flex;
  color: #2e2e2e;
  flex-direction: row;
  position: relative;
  gap: 30%;
  justify-content: center;
  margin: 0 20%;
  padding: 0 5;
`

export const Completed = styled.div<Selected>`
 color: ${prop => prop.cliked? '#F87474': ' #957fef'};
  border-bottom: 2px solid ${prop => prop.cliked? '#957fef':'none'};
  &:hover{
    opacity: 0.7;
    cursor: pointer;
  }

`

export const All = styled.div<Selected>`
  color: ${prop => prop.cliked? '#F87474': ' #957fef'};
  border-bottom: 2px solid ${prop => prop.cliked? '#957fef':'none'};
  &:hover{
    opacity: 0.7;
    cursor: pointer;
  }


`
export const Active = styled.div<Selected>`
  color: ${prop => prop.cliked? '#F87474': ' #957fef'};
  border-bottom: 2px solid ${prop => prop.cliked? '#957fef':'none'};
  &:hover{
    opacity: 0.7;
    cursor: pointer;
  }

`

export const BodyTitle = styled.h2`
  padding: 0px 8px;
  margin: 0;
  width: 'fit-content';


`

export const ContainerBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
font-family: 'Gloria Hallelujah', cursive;


`

