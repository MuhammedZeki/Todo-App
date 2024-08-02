import React, { useState } from 'react'
import { TodoType } from '../types/types'
import { CiCircleRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { newEditTodo, removeTodo } from '../redux/slicers/TodoSlicer';
interface getTodo {
    todo : TodoType
  }
function Todo({todo}:getTodo) {
  const {id,content} = todo
  const [edit,setEdit]=useState<boolean>(false)
  const [newTodo,setNewTodo]=useState<string>(content)  
  const dispatch = useDispatch()
  const handleNewTodo=()=>{
    const editTodo :TodoType={
      id:id,
      content:newTodo
    }
    dispatch(newEditTodo(editTodo))
    setEdit(!edit)
  }
  return (
    <div className='todo'>
      <div className='input'>
        {
          edit ? 
          <input 
            className='inputBar'
            type='text'
            value={newTodo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}
            />            
          : <p>{content}</p>
        }
      </div>
      <div className='flex-row'>
        <CiCircleRemove onClick={()=>dispatch(removeTodo(id))} className='icons'/>
        {        
          edit ? <CiCircleCheck onClick={handleNewTodo} className='icons' /> : <CiEdit onClick={()=>setEdit(!edit)} className='icons' />
        }        
      </div>
    </div>
  )
}

export default Todo
