import logo from './logo.svg';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './App.css';
import { useState } from 'react';

function App() {
   
  const [num,setNum]=useState(0);

  const incNum =() =>{
    setNum(num+1);
    
  }

  const decNum =() =>{
    if(num>0){
      setNum(num-1);
    }else
    {
      alert("you reached at 0")
      setNum(0);
    }
  }



  return (

    <>
    <div></div>

    <div className="container">
      <div className="card">
        <h1 className="header">{num}</h1>

        <div className="btndiv">
        <button className="btn1" onClick={incNum}> <AddIcon></AddIcon> </button>
        <button className="btn2"  onClick={decNum}> <RemoveIcon></RemoveIcon> </button>
        </div>
      </div>

    </div>

    <div></div>


    </>


  )
  
}

export default App;
