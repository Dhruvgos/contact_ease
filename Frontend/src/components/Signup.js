import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
    const navigate = useNavigate();

    //set sign up page
    const [creds, setcreds] = useState({name:'',email:'',password:''});

    const onchange=(e)=>{
        setcreds({...creds,[e.target.id]:e.target.value})
    }

    const creatuser=async(e)=>{
e.preventDefault();
        const response =await fetch("http://localhost:5000/createuser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email:creds.email,password:creds.password,name:creds.name}),
        });
      
            if(response){
                // console.log(response)
                const result = await response.json();
                // console.log(result)
                localStorage.setItem('token', result.token);
                navigate('/');
            }
            else{
                console.error("error occured")
            }
           
          
        }
        // const handleClick=()=>{
        //     creatuser(creds.email,creds.name,creds.password);     
        // }
  return <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-10">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" onChange={onchange}  className="form-control" id="name" placeholder="Enter your name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={onchange}  className="form-control" id="email" placeholder="Enter your email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={onchange}  className="form-control" id="password" placeholder="Enter your password"/>
                    </div>
                    <button onClick={creatuser} type="submit" className="btn btn-primary my-2">
                    <svg width="20px" height="20px" viewBox="4 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M20 18L14 18M17 15V21M4 21C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>

</svg>
                        Create User</button>
                </form>
            </div>
        </div>
    </div>
  </div>;
}

export default Signup;
