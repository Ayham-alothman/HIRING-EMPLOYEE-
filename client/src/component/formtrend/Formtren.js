import "./Formtren.css"
import imgtrend from '../../images/imgtrend.webp'
const Formtrend=({infotrend})=>{



return(
    

    <>
    
      <img src={imgtrend} alt="not found"  ></img>
     <p>the number trend :{infotrend._id}</p>
     <p>   type work : {infotrend.TypeWork}</p>
     <p>   type trender :  {infotrend.TypeTrender}</p>
     <p>end date trender: {infotrend.EndDate}</p>
     <p>date posting: {infotrend.date}</p>

     </>
       

    
    

)


}

export default Formtrend;