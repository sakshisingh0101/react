import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'

import './App.css'
import UserContextProvider from './Context/UsercontextProvider'

function App() {
  
  return (
    <UserContextProvider>
      <Login/>
      <Profile/>

      </UserContextProvider>)
}

export default App
