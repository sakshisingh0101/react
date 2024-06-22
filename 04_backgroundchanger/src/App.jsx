import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const body=document.querySelector('body')
  // body.style.backgroundColor='black';
  const [color,setColor]=useState('pink')
 

  return (
    <>
      <div className='w-full h-screen fixed flex flex-wrap justify-center bottom-1 inset-x-0 px-2 items-center content-end ' style={{backgroundColor:color}}>
      <button className='bg-red-400 text-black rounded-xl ml-5 h-10' onClick={()=> setColor('red')} > Red </button>
      <button  className='bg-lavendar-400 text-black rounded-xl ml-5' onClick={()=> setColor('lavender')} > lavender </button>
      <button  className='bg-green-400 text-black rounded-xl ml-5' onClick={()=> setColor('green')} > green </button>
      <button  className='bg-purple-400 text-black rounded-xl ml-5' onClick={()=> setColor('purple')} > purple</button>
      <button  className='bg-yellow-400 text-black rounded-xl ml-5' onClick={()=> setColor('yellow')} > yellow </button>
      <button  className='bg-black-400 text-black rounded-xl ml-5' onClick={()=> setColor('black')} > black </button>
      <button  className='bg-white-400 text-black rounded-xl ml-5' onClick={()=> setColor('white')} > white </button>
      <button  className='bg-orange-400 text-black rounded-xl ml-5' onClick={()=> setColor('orange')} > orange </button>
      <button  className='bg-pink-400 text-black rounded-xl ml-5' onClick={()=> setColor('pink')} > pink </button>
      </div>
     
    </>
  )
}

export default App
