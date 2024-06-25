import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Layout.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/aboutus/aboutUs.jsx'
import Contact from './components/contactUs/contactUs.jsx'
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
     }
    
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
