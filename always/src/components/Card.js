
import React from "react";
import img1 from '../assets/bowl.jpg';
import img2 from '../assets/bowl.jpg';
import img3 from '../assets/bowl.jpg';
//import '../styles/Third.css';

import Box from "./Box";

const Card = ( props ) => {
    const description = "The girl in white";
    const fruits = [
        {name: {img1}, header: "dghjj", description:"suws"},
        {name: {img2}, header: "dghjj", description:"eret"},
        {name: {img3}, header: "dghjj", description:"eret"},
    ]

    return(
        <div className="card-div">
             <img className="img-view" src={props.imgValue} />
            <h3 className="description">{props.description}</h3> 

            <div>{fruits.map((fruit, index)=> (
                <div key={index}>
                    <Box imgValue={fruit.name} header={fruit.header} description={fruit.description} />
                    {/* <h3>{fruit.name}</h3>
                    <p>{fruit.description}</p> */}
                </div>
            ))}
            </div>
        </div>
    );
}

// const right = "logo";
// <Card imgValue ="logo"  description= "the way" />
// <Card imgValue ={right}  description= "the way" />


export default Card;