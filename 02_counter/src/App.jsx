import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(19);
  
  // let counter=5;
  const addcount=()=>{
    if(counter+1<=20)
      {
    counter=counter+1;
    setcounter(counter)
      }
    // console.log("val updated")
  }
  const removecount=()=>{
    // if(counter-1>=0)
    //   {
    // counter-=1;
    //   }
    if(counter-1>=0)
      {
        counter-=1;
        setcounter(counter);
      }
  }
 return( <>
 <h1>Chai aur React</h1>
 <h2> Counter value: {counter}</h2>
 <button onClick={addcount}>Add value</button>
 <button onClick={removecount}> Remove value</button>

 
 </>
 )
  
  
}

export default App
