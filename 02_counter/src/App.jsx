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
    // counter=counter+1;
    //value ka increment ek hi baar hoga agr 15 h to 19 nhi ho jayegi kyunki ek hi state se call lag rhi h baar baar same call lag rhi h 
    //bunch of packages call ja rhi h like ek hi to kaam h wahi repeat ho rha h 
    setcounter(counter+1)
    setcounter(counter+1)
    setcounter(counter+1)
    setcounter(counter+1)
    //same cheez agr call back function leke kare to ek call complete honeke baad dusri lagti h i mean pura update hone ke baad
    //bunch of packages ki tarah call nhi jaa rhi
    // setcounter((prevcounter)=>prevcounter+1);
    // setcounter((prevcounter)=>prevcounter+1);
    // setcounter((prevcounter)=>prevcounter+1);
    // setcounter((prevcounter)=>prevcounter+1);

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
