import React from 'react';
import './index.css';
import Heading from './Heading';
import Images from './Images';

function card(props) {
return(


    <div className="cards">
        <div className="card">
            <Images imgsrc={props.imgsrc}/>
            <div className="card__info">
                <span className="card__category">{props.title }</span>
                <Heading sname={props.sname}/>
                <a href={props.link} target="_back">
                    <button className="btn"> Watch Now</button>
                </a>
            </div>
        </div>


    </div>




);


}

export default card;