import React from 'react';

const GetHelp =() =>{
    const values = ['one','two','three','four'];
    const navItems =[
        {label:'home', href :'#'},
        {label:'serivces', href :'#'},
        {label:'products', href :'#'},
        {label:'contact us', href :'#'},
    ];
    const nonNav =[
        { id: 1,label:'home',href:'#'},
        { id: 2,label:'services',href:'#'},
        { id: 3,label:'products',herf:'#'},
        { id: 4,label:'contact us',href:'#'},
    ]
    return(
    <div className="nav-container">
        <nav>
            <ul>{navItems.map((nut,x)=>(
               <li key={x}><a href={nut.href}>{nut.label}</a></li> 
            ))}
            </ul>
        </nav>
        <nav>
            <ul>
               {nonNav.map((item) =>(
                <li key={item.id}><a href={item.href}>{item.label}</a></li>
               ))} 
                
            </ul>
        </nav>
        <div>
            <ul>
               {values.map((item,i) =>(
                <li key={{i}}>{item}</li>
               ))} 
            </ul>
        </div>

    </div>

    )
    
}

export default GetHelp;