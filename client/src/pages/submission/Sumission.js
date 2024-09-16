import { useState } from 'react';
import {useParams} from 'react-router-dom'
import Api from '../../api/Create.Api';
const Submission=()=>{
let [Price,SetPrice]= useState('');
let [Time,SetTime]= useState('');


    const IdPara=useParams().idtrender;

    const Submitrequest=()=>{   
   Api.post(`/${useParams.idtrender}/submission`,{Price:Price,
    Time:Time,
    NTrender:IdPara     
}).then((d)=>{
       console.log(d)
   })
   
  

    }

return(
    <>
     <form>
      <label>amount you paid want : </label>
      <input type="text" onChange={(e)=>{SetPrice(e.target.value)}}></input> <br></br>
      <label>how many you max time : </label>
      <input type="text" onChange={(e)=>{SetTime(e.target.value)}}></input>
      <button onClick={(e)=>{e.preventDefault();
          Submitrequest()}}>submit</button>

     </form>

    </>
);

}
export default Submission;