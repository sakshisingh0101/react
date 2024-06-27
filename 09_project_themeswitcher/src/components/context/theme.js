import React,{useContext} from 'react'
export const ThemeContext = React.createContext(
    {themeMode:"light",
     darktheme:()=>{},
     lighttheme:()=>{}
    }

)


export  const ThemeContextProvider=ThemeContext.Provider
export default function useTheme()
{
    return useContext(ThemeContext)
}