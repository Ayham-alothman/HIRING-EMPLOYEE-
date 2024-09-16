
import React from "react";

import {useNavigate} from 'react-router-dom'

import { useState,useEffect } from "react";
import Api from "../../api/Create.Api";
import "./Login.css"
const Login=()=>{

    let [email,SetEmail]=useState('');
    let [password,SetPassword]=useState('');
      const Navigate=useNavigate()
    const SubmitLogin=()=>{
           Api.post('/login',{email:email,password:password}).then((d)=>{
               if(d.data.token){
                sessionStorage.setItem('token',d.data.token);
                 Navigate('/')
               }
               
           }).catch((e)=>{
               console.log(e)
           })
    }


return(
<>

<div className="alllogin">
<div className="box-sizig">
    
    <h1>login</h1>

    <form className="formlogin">

     <label>email</label><br></br>
      <input type="text" onChange={(e)=>{SetEmail(e.target.value)}}></input> <br></br>

       
     <label>passwored</label><br></br>
      <input type="text" onChange={(e)=>{SetPassword(e.target.value)}}></input> <br></br>

        <button onClick={(e)=>{e.preventDefault();
        SubmitLogin()}}>Submit</button>
    </form>
    
    </div>    
    
    </div>
</>

)

}

export default Login;