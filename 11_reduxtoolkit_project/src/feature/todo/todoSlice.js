import React from 'react'
import { createSlice ,nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[{id:1,text:"hello"}],
    isTodoEditable:false,
    todoId:null
}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(newTodo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=> (todo.id!==action.payload))
        },
        updateTodo:(state,action)=>{
            
            state.todos=state.todos.map((todo)=>(todo.id===action.payload.id? {...todo,text:action.payload.text}:todo))
        },
        isTodoEditable:(state,action)=>{
          state.isTodoEditable=action.payload
        },
        addTodoId:(state,action)=>{
            state.todoId=action.payload;
        }
    }
})
export const {addTodo,updateTodo,removeTodo,isTodoEditable,addTodoId}=todoSlice.actions
export const todoReducer=todoSlice.reducer