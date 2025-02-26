import React, { useState } from "react";


const Form =({box})=>{
    const [userName, setUserName] = useState('');
    const [password, setPasssWord] = useState('');
    const valueChange = (e)=>{
        setPasssWord(e.target.value);
    }

const loginForm = ()=>{
    alert("Welcome react");
}
    return(
     <form onSubmit={loginForm}>
        <input
        type="text" 
        name=""
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
        /><br/>
        <input
        type=""
        name=""
        value={password}
        onChange={valueChange}
        />
        <input type="submit" value="LOGIN"/>
     </form>


    )
}

export default Form
