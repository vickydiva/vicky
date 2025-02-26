import React from "react";
import test from '../assets/engineer.jpg';
import logo from '../assets/engineer.jpg';

import '../style/Third.css';

function Third (){
    return(
        <div className="third-div">
            <img className="img-now" src={test} alt="Test import"></img>
            <img className="img-now" src={logo} alt="Test import"></img>


        </div>
    )
}


export default Third;