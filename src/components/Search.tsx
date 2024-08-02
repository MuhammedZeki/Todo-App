import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { TodoType } from '../types/types';
import { useDispatch } from 'react-redux';
import { allDelete, createTodo } from '../redux/slicers/TodoSlicer';
function Search() {
  const [input,setInput]=useState<string>("")
  const dispatch = useDispatch()
  const handleTodoCreate =()=>{
    const newContent : TodoType ={
      id : Math.floor(Math.random()*9999999),
      content : input
    }
    dispatch(createTodo(newContent))
    setInput("")
  }
  return (
    <div className='flex-row'>
      <div className='flex-row searchInput'>
        <input
          className='search'
          type="text"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setInput(e.target.value)} />
        <CiSearch style={{fontSize:"25px"}}/>
      </div>
      <div className='flex-row'>
        <button onClick={handleTodoCreate} className='searchButton' type='submit'>EKLE</button>
        <button onClick={()=>dispatch(allDelete())} className='searchButton' type='submit'>SİL</button>
      </div>
    </div>
  )
}

export default Search
