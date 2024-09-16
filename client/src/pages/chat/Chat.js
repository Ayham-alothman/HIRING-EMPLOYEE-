
import React from "react";
import { useState,useEffect } from "react";
import Convertion from '../../component/convertion/Convertion';
import cons from "../../Daynamicdata"
import { useNavigate } from "react-router-dom";

const Chat=()=>{
    const Navigate=useNavigate()
 let [Convertions,SetConvertions]=useState(cons);

 const NavigateChatId=(e)=>{

Navigate(`./${e.id}`)
 }

return(
<>
<h1>Convertions</h1>
{Convertions.map((ele,i)=>{

return(

<div key={i} onClick={(e)=>{e.preventDefault();
NavigateChatId(ele)}}>
    

<Convertion name={ele.users[0].name}  />


</div>





)

})
}

</>

)

}

export default Chat;