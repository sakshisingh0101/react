import React from 'react'
import {useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github()
{ 
   const data=useLoaderData();
   
    // useEffect(()=>{
//    async function fetch()
//    {  try{
//         const res= await fetch('https://api.github.com/users/hiteshchoudhary');
//         const response=await JSON.parse(res);
//         setData(response);
//    }
//    catch(error)
//    {
//     console.log('error in catching the response')
//    }

//    }
//    fetch();
    // fetch('https://api.github.com/users/hiteshchoudhary')
    // .then((response)=>{
    //     return response.json()
    // }).then((res)=>{
    //     setData(res);
    // }).catch((error)=>console.log(error))

// },[])
    return (
        <>
         <div style={{backgroundColor:'black' , color:'white', textAlign:'center' ,position:'relative',left:'0px', display:'flex', flexWrap:'wrap', justifyContent:'center'  }}>
            
            <img src={data.avatar_url} alt='Git pic' width={300} height={300}/>
            <h1>Github followers: {data['followers']}</h1>
         </div>
        </>
    )
}
export default Github

export const getGitInfo=async()=>{
    const data=await fetch('https://api.github.com/users/hiteshchoudhary')
    return data.json();
}