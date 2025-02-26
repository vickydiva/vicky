import React, { useContext } from "react";
import ThemeCon from "./ThemeCon";

const ThemeButton = () =>{
    const { theme, toggleTheme } = useContext(ThemeCon); 
    return(
        <div>
            <button onClick={toggleTheme} style={{backgroundColor: theme === "light" ? "white" :
             "black" ,color: theme === "light" ? "dark" : "light"}}>Theme</button>
        </div>
    )
}

export default ThemeButton;