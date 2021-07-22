import React from 'react';
import './App.js';



const Todolists = (props) =>{

    
    return(
        <>
        <div className="iteamname">
        <button className="btnl" onClick={ ()=>{props.onSelect(props.id);}}>X</button>
        <li className="list">{props.text}</li>
        </div>
      
        
        
        
        
        </>



    )
}

export default Todolists;