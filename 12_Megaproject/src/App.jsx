import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useDispatch} from 'react-redux'
import { login,logout } from './store/feature/authSlice'
import './App.css'
import authservice from './appwrite/auth'
import { Footer,Header } from './components/index'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();
  useEffect(()=>{
    authservice.getCurrentUser()
    .then((userData)=>{
      if(userData)
        {
          dispatch(login({userData}))
          
        }
        else{
          dispatch(logout())
          
        }
    })
   
    .finally(()=>{setLoading(false)

    })
  },[])
  if(!loading)
    {
       return (
        <div className='min-h-screen flex flex-wrap content-between justify-center  bg-gray-400'>
          <div className='w-full-block'>
            <Header/>
            <main>
            TODO  {/* <Outlet/> */}
            </main>
            <Footer/>
          </div>
        </div>
     
     )
    }
    else{
      return (null)
    }
}

export default App
