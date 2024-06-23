import { useState ,useCallback, useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [length,setLength]=useState(8);
 const [numbers,setNumbers]=useState(false);
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
           pass+=str[random];
          //  pass+=str.charAt(random);
      }
      setpassword(pass);



  },[length,numbers,characters,password])
  
  useEffect(()=>{
    passwordGenerator()
  },[length,numbers,characters])

  //useRef hook
  const passRef=useRef(null);
  const copytoclipboard=useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)

  },[password])


  return (
    <>
     <div className='bg-black' style={{width:"500px",height:"180px",backgroundColor:"black" ,display:'flex', justifyContent:"center",alignItems:"flex-start" ,padding:"4px",flexWrap:"wrap" ,borderRadius:'10px'}}>
      <h1 style={{textAlign:'center',color:'white'}}>Password Generator</h1>


      <input 
      type="text" 
      value={password} 
      className='bg-white '
       style={{width:"300px",height: '30px' ,border:'2px solid grey'}} 
       placeholder='Password'
       ref={passRef} 
       readOnly/>
      <button style={{height:'30px',width:'80px', border:'2px solid grey', padding:'2px' ,textAlign:'center',fontSize:'15px'}} onClick={copytoclipboard}>Copy</button>

      <input type='range' 
      value={length} min={6} max={100}  
      className='cursor-pointer'
       onChange={(e)=>{setLength(e.target.value)}}/>
      <label style={{color:'white',fontSize:'13px' ,marginRight:'2px'}}>Length : {length}</label>


      <input type='checkbox' 
      defaultChecked={numbers}
       onChange={()=>{setNumbers((number)=>!number)}} 
       id='inputnumbers'
        style={{position:'relative',top:'4px', margin:'2px'}}></input>
      <label  htmlFor="inputnumbers"style={{color:'white',fontSize:'13px'}}>Numbers</label>


      <input type='checkbox' 
      defaultChecked={characters}
       onChange={()=>{setCharacters((character)=>!character)}} 
       id='inputcharacters' 
       style={{position:'relative',top:'4px', margin:'2px'}}></input>
      <label  htmlFor="inputcharacters"style={{color:'white',fontSize:'13px'}}>Characters</label>

      
     </div>
    </>
  )
}

export default App
