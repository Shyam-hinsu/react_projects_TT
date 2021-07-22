import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Card from './Card';
import cdata from './cdata';



 
ReactDOM.render(
<>
    <h1 className="heading">my fav web-series</h1>
    <div className="container">   
      {cdata.map((val)=>{
          return(
              <Card 
                  key={val.id}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  sname={val.sname}
                  link={val.link}
               />

);})}
     </div>
</>
  ,
  document.getElementById('root')
);


