import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import authSlice from '../store/feature/authSlice'
import authservice from '../appwrite/auth';
function Protected({children,authentication=true})
{  const navigate=useNavigate();
    const authStatus=useSelector((state)=>state.status)
    const [loader,setLoader]=useState(true)
    useEffect(()=>{
        if(authentication && authStatus!==authentication)
        {
            navigate('/login')
        }
        else if(!authentication&&authStatus!==authentication)
            {
                navigate('/')
            }
            setLoader(false)
    },[navigate,authStatus,authentication])

    
    return (
        <>  {loader? <h1>loading...</h1>: {children}}

        </>
    )
}
export default Protected