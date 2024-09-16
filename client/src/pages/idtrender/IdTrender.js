
import {useParams} from 'react-router-dom'
import Api from '../../api/Create.Api';
import {useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom';
const IdTrender=()=>{
      const Navigate=useNavigate();
      const idtrender=useParams().idtrender
      const id= useParams().idtrender    
      let [Trender,SetTrender]=useState(null)
      
      const ToChat=()=>{
    
     Api.post('./createchat',{idtrender:idtrender}).then((d)=>{
       console.log(d.data.idchat)
       Navigate(`/chat/${d.data.idchat}`)
     })     


      }



    useEffect(()=>{
      Api.get(`/${id}`).then((d)=>{
        console.log(d)
     SetTrender(d.data.infotrender);
       
      })//end api
  
      },[])

return(
    <>
    {Trender ? 
    <>
    
    <p> number of trender : {Trender._id}    </p>
    <p> end date of trender : {Trender.EndDate}    </p>
    <button>  <Link to={`submission`}>submission</Link>  </button>
    <button onClick={(e)=>{e.preventDefault();
    ToChat();}}> sendhim   </button>

    </>
    :<p>there problem info of trender</p>}
    </>
);

}


export default IdTrender;
