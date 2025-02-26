import React, { useEffect } from "react";

const Mine =() =>{
    const handleclick = () =>{

    }

    useEffect(()=>{
        console.log("Welcome to React Hooks!!!")
        return(
            alert("Hello World")
        )
    },[])
    return(
        <section>
            <button onClick={handleclick}>Click me</button>
        </section>
    )
}





export default Mine;