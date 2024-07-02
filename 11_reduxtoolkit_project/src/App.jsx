import { useState } from 'react'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'

import './App.css'

function App() {
 

  return (
    <>  <h1>Learn about redux-toolkit</h1>
       <AddTodos/>
       <Todos/>
    
    </>
  )
}

export default App
