import React, { useState } from "react";
import ThemeCon from "./ThemeCon";


const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState('light');
    const toggleTheme = () =>{
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark': 'light'));
    }
    return(
        <ThemeCon.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeCon.Provider>
    )
}
export default ThemeProvider;