import axios from 'axios'

 
 
 const Api= axios.create({baseURL:'http://localhost:2000/'});
 
 if(sessionStorage.getItem('token')){

    Api.interceptors.request.use(con=>{

        //con.headers.Authorization=`Bearer ${sessionStorage.getItem('token')}`;

        con.headers.Authorization = `${sessionStorage.getItem('token')}`;

        return con;
    })

 



}
 

 export default Api ;