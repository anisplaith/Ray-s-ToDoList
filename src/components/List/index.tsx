import React, { useEffect, useState } from "react";
import Task from "../Task";
import Trash from "../../assets/trash-can.svg"
import { BoxInput, Button, ButtonDelete, DivTask, InputTask} from "./style";

interface TodoList{
    id: number,
    description: string, 
    marked: boolean
}

const getLocalStorage = () =>{ // função para restaurar os valores de tasks que estão em LocalStorage

    let list = localStorage.getItem('tasks');
    if(list){
        return JSON.parse(localStorage.getItem('tasks') || '[]')
    }

}

export default function List({all, active, completed}: any){
    const [descrip, setDescrip] = useState<string>('')
    const [task, setTask] = useState<TodoList[]>(getLocalStorage())

    // LOCAL STORAGE
    useEffect(()=>{
        const ReStorageTasks = JSON.parse(localStorage.getItem('tasks') || '[]') // JSON.parse transfoma string em Object
         if(ReStorageTasks){
             setTask(ReStorageTasks)
         }
 
     }, [])
     
    useEffect(()=>{
      
        localStorage.setItem('tasks', JSON.stringify(task)) // JSON.stringify tranforma o objeto em string, mas sem perder a 'cara' original
        

    }, [task])

    

 
    function handleChange(event: any){
        setDescrip(event.target.value)

    }

    function handleAdd(){

        if(descrip != ''){

            let newTask = {id: Date.now(), description: descrip, marked: false};
            setTask([...task, newTask])
            setDescrip('')
        }
      
        
    }

    function handleTaskCompleted (id: number){
        setTask(prev => prev.map((item)=> item.id === id? {...item, marked: !(item.marked)}: item))

    }

    function handleDelete(id: number){
        setTask(prev => prev.filter(item => item.id != id)) // retorna todos os objetos, menos aquele no qual o id vc passou
       


    }
    function handleDeleteAll(id:any){
        
        setTask(prev => prev.filter(item => item.marked === false));
        
        

    }
    return(

        <>
            
            <BoxInput>
                {(active || all)?
                <>
                <InputTask 
                    className="inputTask"
                    type="text"
                    placeholder="Write a task... ✨"
                    onChange={handleChange}
                    value = {descrip}
                    maxLength = {60}
                />

                <Button onClick={handleAdd}>Add</Button>
                
                </>:
                (<div style={{borderTop: '1.5px solid #957fef', width: '100%', height: 5}}></div>)
                
            
            }
                
               

            </BoxInput>

            <div style={{display: 'flex', marginLeft: 'auto'}}>
                {(completed) ? <ButtonDelete onClick={()=> handleDeleteAll(task)}>Delete all</ButtonDelete>: ("")}
            </div>
            
            {
                task.map((item: TodoList) =>{
                    if(completed && item.marked){
                        return (
                            <>
                            <DivTask>
                                <Task
                                    key={item.id}
                                    description={item.description}
                                    checked = {item.marked}
                                    onClick ={()=>{handleTaskCompleted(item.id)}}
                                />
                                <img src= {Trash} alt="delete" style={{width: 25, marginLeft: 'auto'}} onClick = {()=> handleDelete(item.id)}/>
                                
                            </DivTask>
                            
                            </>
                            
                        
                        ) 
                        

                    }
                    
                    if(active && !(item.marked)){
                        return (
                            <Task
                                key={item.id}
                                description={item.description}
                                checked = {item.marked}
                                onClick ={()=>{handleTaskCompleted(item.id)}}
                            />
                        )

                    }
                    if(all){
                        return (
                            
                            <Task
                                key={item.id}
                                description={item.description}
                                checked = {item.marked}
                                onClick ={()=>{handleTaskCompleted(item.id)}}
                            />
                            
                        )

                    }
                    
                    
                })
            }
       


        
        </>

    )



    
}