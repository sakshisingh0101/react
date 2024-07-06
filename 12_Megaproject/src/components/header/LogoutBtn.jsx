import React from 'react'
import { logout } from '../../store/feature/authSlice'
import {useDispatch} from 'react-redux'
import authservice from '../../appwrite/auth'
function LogoutBtn()
{  const dispatch =useDispatch();
    const handleLogout=(e)=>{
      e.preventDefault()
      authservice.logout().then(()=>{
        dispatch(logout())
      }).catch((error)=>{
        console.log("Appwirte error::Logout error",error)
      });
      
    }
    return (
        <>
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={handleLogout}>
            Logout
            </button>
            </>
    )
}
export default LogoutBtn