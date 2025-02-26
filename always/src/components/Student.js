import React from "react";

const Student =( props ) =>{
    return(
        <div>
            <h1>The name is {props.firstname}</h1>
            <h1>From the {props.lastname}family</h1>
        </div>
    )

}