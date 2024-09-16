const {Login}=require('../model/AddUser.Model');
const {sign} = require('jsonwebtoken');
const { json } = require('express/lib/response');

const LoginControllar=(req,res)=>{

Login(req.body).then((d)=>{
  
    let ob={id:d._id,name:d.name,email:d.email,sendr:d.sendrequest,
    reciver:d.reciverequest,friend:d.friend}
      
    
    
    const token=sign(ob,process.env.EnToken);
    
    res.status(200).json({token:token})

})
.catch((e)=>{console.log(e)
    res.status(404).json({infoer:e})})



}//end fun

module.exports=LoginControllar;