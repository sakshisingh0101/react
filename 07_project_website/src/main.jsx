import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Layout.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/aboutus/aboutUs.jsx'
import Contact from './components/contactUs/contactUs.jsx'
import User from './components/user/user.jsx'
import Github from './components/github/github.jsx'

import { getGitInfo } from './components/github/github.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{
      path:'',
      element:<Home/>
    },
    {
      path:'aboutUs',
      element:<About/>
    },
     {
      path:'contactUs',
      element:<Contact/>
     },
     {
      path:'user/:userid',
      element:<User/>
     },
     {loader:getGitInfo,
      path:'github',
      element: <Github/>
     }
    
    ]
  }

])

// const router=createBrowserRouter(
//   createRoutesFromElements(
//   <Route path='/' element={<Layout/>}>
//     <Route path='' element={<Home/>}></Route>
//     <Route path='aboutUs' element={<About/>}></Route>
//     <Route path='contactUs' element={<Contact/>}></Route>
//     <Route path='user/:userid' element={<User/>}></Route>
//     <Route loader=getGitInfo or ({request})=>{} 
//path='github'
// element={<Github/>}></Route>
//   </Route>
//   )
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
