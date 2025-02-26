//CREATE A COMPONENT THAT WIL DISPLAY SAY DIFFERENT PIC AND DESCRIPTIONS

import React from "react";

const Box = ( props ) =>{

    return(
        <div className="div-box">
            <img src={props.imageValue} />
            <h3>{props.header}</h3>
            <p>{props.description}</p>
        </div>
    );
}


export default Box;