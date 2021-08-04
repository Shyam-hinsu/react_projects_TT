import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) =>{
  return(
    <>
  
    <section className="section">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-12">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 home1">
                        <h1>Grow your business with <br/><strong>HS Tech.</strong></h1>
                        <h2 className="my-3" > {props.name}</h2>
                        <div className="mt-3">
                              <NavLink to={props.visit} className="btn btn-outline-primary" > {props.btnname}</NavLink>
                        </div>

                    </div>

                   
                </div>
            </div>
        </div>
    </section>


   
    
    </>

  );
  };
  export default Common;
  