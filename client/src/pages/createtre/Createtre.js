
import React from "react";  
import { useState } from "react";
import Api from "../../api/Create.Api";

import './Createtre.css'

const Creattre=()=>{

let [TypeTrender,SetTypeTrender]=useState('public');
let [TypeWork,SetTypeWork]=useState('');
let [Addres,SetAddres]=useState('');
let [Budjet,SetBudjet]=useState('');
let [EndDate,SetEndDate]=useState('');


const handelsubmit=()=>{
    Api.post('./createtrender',{
        TypeTrender:TypeTrender,
        TypeWork:TypeWork,
        Budjet:Budjet,
        EndDate:EndDate,
    }).then((d)=>{console.log(d)})
}



return(
<>
<div className="wallpaper">
    <div className="form">
        
    <div className="title">
        <h1>create trender</h1>
        </div>
         
               <div className="selectoption">
                   
                   <p>type of trender</p>
                   <select onChange={(e)=>{SetTypeTrender(e.target.value)}}>
                      
                   <option value="public">public</option>
                   <option value="private">private</option>


                   </select>
                   
                   
                   
                   </div>



             <div className="inputform">
             <label>type work</label>

             <input type="text" id="inputwork" onChange={(e)=>{SetTypeWork(e.target.value)}}></input>
             
             </div>
         
                
             <div className="inputform">
             <label>addres</label>

             <input type="text"  onChange={(e)=>{SetAddres(e.target.value)}} ></input>
             
             </div>

             <div className="inputform">
             <label>budjet</label>

             <input type="text" onChange={(e)=>{SetBudjet(e.target.value)}} ></input>
             
             </div>
         
             
             <div className="dateform">
             <label>end date</label>

             <input type="date" onChange={(e)=>{SetEndDate(e.target.value)}} ></input>
             
             </div>
         

             <div className="fileform">
             <label>details of work upload in file pdf</label>

             <input type="file" ></input>
             
             </div>

             <div className="btnform">

             <input type="submit" onSubmit={handelsubmit} onClick={handelsubmit} ></input>
             
             </div>
         
    
        
        
        </div>
    
    </div>
</>

)

}

export default Creattre;