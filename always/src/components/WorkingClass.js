import React, { Component } from "react";

class WorkingClass extends Component{
    constructor(props){
        super(props);
        this.state ={
            count:0,
        }
        
    }
 decrement = () =>{
    this.setState({count: this.state.count -1});
 }  
increment = () =>{
    this.setState({count:this.state.count + 1});
}


render(){
    return(
        <div>
            <p>Counter:{this.state.count}</p>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
        </div>
    )
}
}

export default WorkingClass;

const Hellp =()=> {
    const name ="press";
    const giveTureorFalse = () =>{
        let firstName = 'sarah';
        firstName ? console.log("correct") : console.log("incorrect");
    }
    return(
        <button onClick={giveTureorFalse} value={name}/>
    );
    
}