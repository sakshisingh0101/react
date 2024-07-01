import React from 'react'
import Todocontext from './todocontext'
function TodoContextProvider({children})
{

const todo=[];
const addTodo=(todo)=>{}
const updatetodo=(todo,id)=>{}
const deleteTodo=(id)=>{}
const toggleCompleted=(id)=>{}


    return (
        <Todocontext.Provider value ={{todo,addTodo,updatetodo,deleteTodo,toggleCompleted}}>
            {children}

        </Todocontext.Provider>
    )
}
export default TodoContextProvider


