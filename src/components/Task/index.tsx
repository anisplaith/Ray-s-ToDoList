import React from "react";
import { Container, Input } from "./style";

interface taskInfo {
    description: string,
    checked?: boolean,
    onClick?: () => void,

    
   
}

export default function Task({description, checked, onClick}:taskInfo){

    return(
        <>
        <Container doneTask = {checked} >
            <Input className="checkbox" type={"checkbox"} checked = {checked} onClick ={onClick} />
            {description}
        </Container>
        </>


    )
}
