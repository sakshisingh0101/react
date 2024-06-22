import { useState ,useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [length,setLength]=useState(8);
 const [numbers,setNumbers]=usestate(false);
 const [characters,setCharacters]=useState(false);
 const [password,setpassword]=useState()
 const passwordGenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numbers){
    str+='1234567890'
  }
  if(characters)
    {
      str+="!@#$%^&*(){}|[]?~"
    }
    for(let i=0;i<length;i++)
      { 
        let random=Math.floor((Math.random())*51);
        if(numbers)
          {
            random=Math.floor((Math.random())*61);
          }
          if(characters)
            {
              random=Math.floor((Math.random())*78);
            }
           // pass+=str[random];
           pass+=str.charAt(random);
      }
      setpassword(pass);


  },[length,numbers,characters,password])


  return (
    <>
      <div className='rounded-xl ' style={{ width: '600px', height:'300px', backgroundColor: 'black' }}>
       
        </div>
    </>
  )
}

export default App
