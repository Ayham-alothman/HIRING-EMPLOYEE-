
import {Outlet,Navigate} from 'react-router-dom'

const Protectroute=()=>{
let login;
if(sessionStorage.getItem('token')){

  login=true;

}
else{login=false}




return(

 login ?<Outlet/> :<Navigate to={'/login'}/> 
)

}

export default Protectroute;