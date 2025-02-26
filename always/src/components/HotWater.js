import React from "react";
import logo from '../assets/engineer.jpg';
import test from '../assets/med.jpg';
import '../style/Third.css';

const HotWater= (props) =>{
    return(
        <div className="hot-div">
         <img className="img-now" src={logo} alt="Test import"></img>
         <h1>that {props.name}</h1>
         <img className="img-now"src={test} alt="Test import"></img>
         <h1>i meant {props.className}</h1>
        </div>
    )
}

export default HotWater;