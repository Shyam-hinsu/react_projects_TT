import React from "react";
import { NavLink } from "react-router-dom";
import home from "../src/image/home.png"
import Common from "./Common";



const Home = () =>{

    

    return(
      <>
     <Common
    name="let get started"
    visit="/about"
    btnname="click to about"
    />

      </>
  
    );
  };
  export default Home;
  