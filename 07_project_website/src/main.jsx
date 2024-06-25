import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Layout.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/aboutus/aboutUs.jsx'
import Contact from './components/contactUs/contactUs.jsx'
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[{
//       path:'',
//       element:<Home/>
//     },
//     {
//       path:'aboutUs',
//       element:<About/>
//     },
//      {
//       path:'contactUs',
//       element:<Contact/>
//      }
    
//     ]
//   }

// ])

const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}></Route>
    <Route path='aboutUs' element={<About/>}></Route>
    <Route path='contactUs' element={<Contact/>}></Route>
  </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
