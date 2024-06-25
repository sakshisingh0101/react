import { useState } from 'react'

import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Home from './components/home/home'
import { Outlet } from 'react-router-dom'
function Layout() {
  

  return (
    <>
     
      <Header/>
      <Outlet/>
      <Footer/>
    
    </>
  )
}

export default Layout
