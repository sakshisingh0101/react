import React from 'react'
import { createSlice ,nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[{id:1,text:"hello"}]
}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id:nanoid,
                text:action.payload
            }
            state.todos.push(newTodo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=> (todo.id!==action.payload))
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>(todo.id===action.payload? {...todo,text:action.payload.text}:todo))
        }
    }
})
export const {addTodo,updateTodo,removeTodo}=todoSlice.actions
export const todoReducer=todoSlice.reducer