
import { useState } from 'react';
import './App.css';
import './index.css';
import Todolists from "./Todolists";

function App() {

  const [eve , ueve]=useState();
  const [items, setitems]=useState([]);

  const InEvent = (e) => {
    ueve(e.target.value);
  }

  

  const ShowList = () => {
    
    setitems((olddata)=>{
      return [...olddata,eve];
    });
    ueve("");

  }


  const DltIteams= (id)=>{
    console.log("dlt ha ha"); 
    setitems((olddata)=>{
      return olddata.filter((arrEle,index)=>{
        return index !== id;
      })
    })

  }



  return (
    <>
    <div className="continer">
     
      <div className="note">
        <h1>ToDoList</h1>
        <div className="Divinp">
              <input type="text" className="textfield" placeholder="Add list" onChange={InEvent} value={eve} />
        </div>

        <button className="fill" onClick={ShowList}>+</button>

        <ul>
          
            {items.map((itemsvalue , index)=>{
              return <Todolists 
              text={itemsvalue} 
              id={index} 
              key={index}
              onSelect={DltIteams}/>

            })}

        </ul>
        
      </div>
      
    </div>
    </>
  );
}

export default App;
