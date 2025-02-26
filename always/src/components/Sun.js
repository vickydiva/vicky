import React, { useState } from "react";


const Sun =()=>{
    const [sun, setSun] = useState(100);
    const handleClick =()=>{
        setSun(sun - 10)
    
    
    }
    const [step, setStep] = useState(40);
    
    const incrementCount = () =>{
        setStep(step + 10 );
        
    }

        


        

    return(
        <div>
            <p>{sun}</p>
            <button onClick={handleClick}>add</button>
            <button onClick={incrementCount}>add</button>
            
            

        </div>
    )
}

export default Sun;