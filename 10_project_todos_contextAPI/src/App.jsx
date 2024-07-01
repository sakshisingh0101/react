import { useState,useEffect } from 'react'
import {TodoProvider} from './context/index'

import './App.css'


import TODOFORM from './components/Todoform';
import TodoItem from './components/Todolist';

function App() {
  
const [todos,setTodo]=useState([]);
const addTodo=(todo)=>{
 
  setTodo((prev)=> [{id:Date.now(),...todo},...prev])
}
const updateTodo=(todo,id)=>{
  setTodo((prev)=>  prev.map((item)=>(item.id===id? todo:item)))
}
const toggleComplete=(id)=>{
 setTodo((prev)=>prev.map((item)=>(item.id===id? {...item,completed:!item.completed}:item)
  // if(item.id===id)
  //   {
  //     item.completed=!(item.completed);
  //     return item
  //   }
  //   else{
  //     return item;
  //   }
 ))
}
const deleteTodo=(id)=>{
  setTodo((prev)=>prev.filter((item)=>item.id!==id))
}
useEffect(()=>{
  const todos=JSON.parse(localStorage.getItem('todos'))
  if(todos&&todos.length>0)
    {
      setTodo(todos)
    }
},[])
useEffect(()=>{
 localStorage.setItem('todos',JSON.stringify(todos))
},[todos])
  return (

    <TodoProvider value={{todos ,addTodo , updateTodo,  deleteTodo,  toggleComplete}}> <div> 
       <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TODOFORM/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                       { 
                          todos.map((todo)=>{
                            return (
                              <div key={todo.id} className="w-full" >
                                <TodoItem todo={todo}/>
                              </div>
                            )
                          })
                       }
                        
                       
                    </div>
                </div>
            </div>
    </div>
     
    </TodoProvider>
  )
}

export default App


