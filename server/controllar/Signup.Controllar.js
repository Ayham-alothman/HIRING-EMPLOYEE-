  const {Signup}= require('../model/AddUser.Model');
  const {sign} = require('jsonwebtoken');



const SignupUser=(req,res)=>{

Signup(req.body).then((d)=>{
let ob={id:d._id,name:d.name,email:d.email,sendr:d.sendrequest,
  reciver:d.reciverequest,friend:d.friend}

  const token=sign(ob,'ayham1998');

  res.status(200).json({token:token})

})//end then
.catch((e)=>{res.status(404).json({infoer:e})})



}//end fun

module.exports=SignupUser;