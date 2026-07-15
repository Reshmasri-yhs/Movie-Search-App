import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();


export function ThemeProvider({children}){

  const [theme,setTheme]=useState(
    localStorage.getItem("theme") || "dark"
  );


  useEffect(()=>{

    localStorage.setItem(
      "theme",
      theme
    );

    document.body.className=theme;

  },[theme]);


  return(

    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >

      {children}

    </ThemeContext.Provider>

  );

}
export default ThemeContext