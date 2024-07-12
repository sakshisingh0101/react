import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import {store} from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddPost from './pages/Addpost.jsx'
import Login from './pages/Login.jsx'
import AllPost from './pages/AllPost.jsx'
import Signup from './pages/Signup.jsx'
import Post from './pages/Post.jsx'
import EditPost from './pages/EditPost.jsx'
import Home from './pages/Home.jsx'
import Protected from './components/AuthLayout.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {path:'/',
       element:<Home/>

      },
      {
        path:'/login',
        element:<Protected  authentication={false}>
          <Login/>
        </Protected>
      },
      {
        path:'/signup',
        element:<Protected authentication={false}>
          <Signup/>
        </Protected>
      },
      {
        path:'/all-post',
        element:<Protected authentication>
        <AllPost/>
      </Protected>
      },
      { path:'/add-post',
        element:<Protected authentication>
        <AddPost/>
      </Protected>},
      { path:'/edit-post/:slug',
        element:<Protected authentication>
        <EditPost/>
      </Protected>},
        { path:'/post/:slug',
          element:<Protected authentication>
          <Post/>
        </Protected>}

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
