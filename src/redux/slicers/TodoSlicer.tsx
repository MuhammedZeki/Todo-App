import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TodoİnitialState, TodoType } from "../../types/types"

const initialState : TodoİnitialState ={
    todos : []
}
export const TodoSlicer = createSlice({
    name:"todo",
    initialState,
    reducers:{
        createTodo : (state : TodoİnitialState , action :PayloadAction<TodoType>)=>{
            state.todos = [...state.todos,action.payload]
        },
        allDelete :(state:TodoİnitialState)=>{
            state.todos = []
        },
        removeTodo : (state:TodoİnitialState,action:PayloadAction<number>)=>{
            state.todos = [...state.todos.filter((todo:TodoType)=>todo.id !== action.payload)]
        },
        newEditTodo : (state:TodoİnitialState,action:PayloadAction<TodoType>)=>{
            state.todos = [...state.todos.map((todo:TodoType)=> todo.id !== action.payload.id ? todo : action.payload)]
        }
    }
})
export const {createTodo , allDelete ,removeTodo,newEditTodo} = TodoSlicer.actions
export default TodoSlicer.reducer