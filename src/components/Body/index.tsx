import styled from "styled-components"
import React, { useState } from "react"
import { Active, All, BodyTitle, Completed, ContainerBody, Menu } from "./style";
import List from "../List";

export default function Body(){

    const [completed, setCompleted] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)
    const [all, setAll] = useState<boolean>(true)



    function allSelected(){
        setAll(true)
        setCompleted(false)
        setActive(false)
    }
    function activeSelected(){
        setCompleted(false)
        setActive(true)
        setAll(false)
    }
    function completedSelected(){
        setCompleted(true)
        setActive(false)
        setAll(false)

    }


    return (
        <ContainerBody>

            <div style={{ width: '70%', display: 'flex', flexDirection: 'column' , gap: 15}}>
                <Menu>

                    <All onClick={allSelected} cliked={all}> <BodyTitle>All</BodyTitle> </All> 
                        
                    <Active onClick={activeSelected} cliked={active}> <BodyTitle>Active</BodyTitle> </Active>

                    <Completed onClick={completedSelected} cliked={completed}><BodyTitle>Completed</BodyTitle></Completed>
                </Menu>
                

                <List all={all} active={active} completed={completed}/>
              


            </div>

        </ContainerBody>

    )
}