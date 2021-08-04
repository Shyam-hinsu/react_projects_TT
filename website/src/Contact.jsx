import React from "react";

const Contact = () =>{
    return(
      <>
      <form className="algn-iteam-center">
        <div className="container cont justify-content-center align-items-center">
        <div className="row">
          <div className="col">
             <input type="text" className="form-control" placeholder="First name"/>
          </div>
          <div className="col">
              <input type="text" className="form-control" placeholder="Last name"/>
          </div>
        </div>
        <div className="col">
        <input type="email" className="form-control" placeholder="email"/>

        </div>
        <button type="button" className="btn btn-outline-success w-25 btnnn">Submit</button>
        </div>
    </form>
     
    
      </>
  
    );
  };
  export default Contact;
  