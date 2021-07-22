import React, { useState } from 'react';


const App= () => {

    const [fullname,setfullName]=useState({
            fname: "",
            lname: "",
            email:"",
            mobileNo:"",
    });


    const inputEvent = (event) =>{
        console.log(event.target.value);
        
        //const value = event.target.value;
        //const name = event.target.name;

        const [name , value] = event.target;

        setfullName((preValue)=>{

            return{
                ...preValue,
                [value] : name,

            }
            /* if(name === "fName"){ 
                    return{
                        fname : value,
                        lname : preValue.lname,
                        email: preValue.email,
                        mobileNo : preValue. mobileNo,
                    };
                   
                } else  if(name === "lName"){ 
                    return{
                        fname :preValue.fname,
                        lname : value,
                        email: preValue.email,
                        mobileNo : preValue. mobileNo,
                    };
                 }else  if(name === "Email"){ 
                    return{
                        fname :preValue.fname,
                        lname : preValue.lname,
                        email: value,
                        mobileNo : preValue. mobileNo,
                    };
                 }else  if(name === "MobNo"){ 
                    return{
                        fname :preValue.fname,
                        lname : preValue.lname,
                        email: preValue.email,
                        mobileNo : value,
                    };
                 }
                 */
                 
            })
        }
    const fullNameSubmit=(e)=>{
            e.preventDefault();
            alert("submited")
     
    }
  

    return(

        <>
        <form onSubmit={fullNameSubmit}>
        <div>
        <h1>😊 Hello {fullname.fname} {fullname.lname}  😊</h1>
        <h1>   {fullname.email}  </h1>
        <h1>    {fullname.mobileNo} </h1>
        <input  type="text" placeholder="Your Name" className="box"
         onChange={inputEvent} value={fullname.fname} name='fname'/>

        <input  type="text" placeholder="Your LastName" className="box"
         onChange={inputEvent} value={fullname.lname} name='lname'/>

        <input  type="email" placeholder="Your email" className="box"
         onChange={inputEvent} value={fullname.email} name='email'/>

        <input  type="number" placeholder="Your mobile number" className="box" 
        onChange={inputEvent} value={fullname.mobileNo} name=' mobileNo' />
        
        <button type="submit" >Click Here</button>
        </div>
        </form>
        </>
    );
}
   
export default App;