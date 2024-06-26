import React, {useContext} from 'react'
import Usercontext from '../Context/Usercontext'
function Profile()
{   const {user}=useContext(Usercontext)
  if(!user)
    {
    return (
        <> <div> Please Login!!</div>
         
        </>
    )
}
else if(user.userName==="")
    {
        return (
            <>
            <h3>Please enter your username</h3></>
        )
    }
  else{
    return (
        <>
        <div> 
            <h1>Welcome {user.userName}  </h1>
        </div>
        </>
    )
  }
}
export default Profile
