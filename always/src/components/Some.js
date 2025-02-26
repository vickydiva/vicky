import React from "react";
const Some =() =>{
const persons =[
    {fname:"john",lname:"francis", course:"python"},
    {fname:"goodness",lname:"stephen", course:"java"},
    {fname:"kenny",lname:"adewale", course:"html/css"},
]
return(
    <div>{persons.map ((person,index)=>(
        <ul key={index}>
            <h1>{person.fname} {person.lname} {person.course}</h1>
        </ul>
    ))}

    </div>
    
)





{/*
const persons = [
    {fname: "john", lname:"pope"},
    {fname: "kevlin", lname:"don"},
    {fname: "victoria", lname:"Queen"},
     {fname: "frank", lname:"paul"},
];
return(
    <div> {persons.map((person,index)=>(
        <ul key={index}>
            <li>{person.fname},{person.lname}</li>
        </ul>
    ))}

    </div>

)*/}


}

export default Some;