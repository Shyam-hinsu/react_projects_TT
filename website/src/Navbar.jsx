import React from "react";
import Home from "./Home";
import {NavLink} from "react-router-dom";


const Navbar = () =>{
    return(
      <>
<div className="container-fluid nav_bg">
    <div className="row">
        <div className="">

            <nav className="navbar navbar-expand-lg navbar-light bg-lights navbars">
                 
                    <NavLink className="navbar-brand gradient-text" to="/">H.S.</NavLink>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active_e" className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active_e" className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active_e" className="nav-link" to="/services">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active_e" className="nav-link" to="/contact">Contacts</NavLink>
                                </li>
                        </ul>
                    </div>
                
            </nav>
        </div>
    </div>
</div>
      </>
  
    );
  };
  export default Navbar;
  