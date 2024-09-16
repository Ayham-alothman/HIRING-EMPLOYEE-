
import React from "react";
import {useNavigate} from 'react-router-dom'

import { useState,useEffect } from "react";
import './Signup.css'
import Api from "../../api/Create.Api";
const Signup=()=>{

let [name,SetUserName]=useState('');
let [email,SetEmail]=useState('');
let [password,SetPassword]=useState('');
const Navigate=useNavigate()

const ClickSubmit=()=>{


Api.post('/signup',{name:name,email:email,password:password}).then((d)=>{
    if(d.data.token){
        sessionStorage.setItem('token',d.data.token);
         Navigate('/')
    }

})

}

return(
<>
<div className="allsignup">   

<div className="sign-box">

<h1 className="hsignup" >Signup</h1>

<form className="formsignup">



<label className="labelsignup" >username </label><br></br>
<input type="text" placeholder="enter name" className="inputsignup"
 onChange={(e)=>{SetUserName(e.target.value)}}></input>  
<label className="labelsignup">email</label><br></br>
<input type="text" placeholder="enter email"className="inputsignup" 
 onChange={(e)=>{SetEmail(e.target.value)}} ></input>
<label className="labelsignup">password </label><br></br>
<input type="text" placeholder="enter password" className="inputsignup"
 onChange={(e)=>{SetPassword(e.target.value)}} ></input>
<br></br>
<button className="btnsignup" onClick={(e)=>{
e.preventDefault();
ClickSubmit();
}} >submit</button>


</form>


</div>



</div>
</>

)

}

export default Signup;