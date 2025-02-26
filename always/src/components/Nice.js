import React, { useState } from "react";



const Nice =()=>{
    const [val, setVal] = useState(0);
    const handleClick = ()=>{
        setVal(val + 1);
    }
    return(
        <div>
            <p>{val}</p>
            <button onClick={handleClick}>ADD</button>
        </div>
    )

}




export default Nice;