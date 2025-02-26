import React from "react";

const Bolt = ({name}) =>{
    return(
        <div>
            <button> this are my {name}</button>
        </div>
    )
}
export default Bolt;

const Car =({benzwagon})=>{
    return(
        <Bolt name={benzwagon} />
    )
}
export{ Car };

const Landmark=({beach})=>{
    return(
        <Bolt name={beach} />
    )
}
export { Landmark };
