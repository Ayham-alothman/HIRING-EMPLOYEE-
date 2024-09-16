import React from "react";
import { useState,useEffect } from "react";
import arr from "../../Daynamicdata";
import Topbar from "../../component/topbar/Topbar";
import Formtrend from "../../component/formtrend/Formtren";
import Api from "../../api/Create.Api";

import "./Home.css"
import { useNavigate} from "react-router-dom";

const Home=()=>{
    const Navigate=useNavigate();
   let [Trenders,SetTrenders]= useState([]); 
   useEffect(()=>{
       Api.get('/').then((d)=>{
    SetTrenders([...d.data.trenders])
    
    
    })//end Api
   },[])

const Idtrender=(id)=>{
    
    Navigate(`/${id}`)
}

   
return(
<>
<Topbar/>



<div className="content">
    
    {Trenders.map((e,i)=>{
        
        return <div className="trend" key={i} onClick={()=>{Idtrender(e._id)}}>  <Formtrend infotrend={e}  />   </div>
       
    })}
    
    
    </div>
</>

)

}

export default Home;
