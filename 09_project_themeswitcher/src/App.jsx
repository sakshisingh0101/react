import { useState,useEffect } from 'react'
// import { ThemeContext } from './components/context/theme'
import { ThemeContextProvider } from './components/context/theme'
import useTheme from './components/context/theme'
import ThemeBtn  from './components/themebutton'
import Card from './components/Card'
import './App.css'

function App() {
 
  const [themeMode ,setThemeMode]=useState('Light');
  const darktheme=()=>{
    setThemeMode('Dark')
  }
  const lighttheme=()=>{
    setThemeMode('Light')
  }
  //actual change in theme
  useEffect(()=>{
    const html=document.querySelector('html')
    html.classList.remove('Light','Dark')
    html.classList.add(themeMode)

  },[themeMode])
  
  
  return (
    <ThemeContextProvider value={{themeMode,darktheme,lighttheme}}>
     
     
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

    </ThemeContextProvider>
  )
}

export default App
