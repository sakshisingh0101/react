import React,{useState,useContext} from 'react'
import Usercontext from '../Context/Usercontext';
function Login()
{   const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const {setUser} =useContext(Usercontext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({userName,password});


    }

    return (
        <>
         <div style={{backgroundColor:'black' , color: 'aquamarine' ,width:'500px' ,display:'flex', flexWrap:'wrap' ,alignItems:'center', justifyContent:'center', padding:'8px'}}>
            <div style={{width:'500px',display:'flex',flexWrap:'wrap',justifyContent:'center' ,padding:'5px'}}><h2>Login: </h2>
            <input type='text' placeholder='UserName' value={userName} onChange={(e)=>{
                setUserName(e.target.value)
            }} style={{color:'black'}}></input>
            </div>
         
            <div style={{width:'500px',display:'flex',flexWrap:'wrap',justifyContent:'center',padding:'5px'}} >
            <h2>Password: </h2>
            <input type='password' placeholder='Password' value={password} onChange={(e)=>{
                setPassword(e.target.value);
            }} style={{color:'black'}}/>
            </div>
         
         <button style={{color:'white', backgroundColor:'grey'}}onClick={handleSubmit}>Submit</button></div>
        </>
    )
}
export default Login