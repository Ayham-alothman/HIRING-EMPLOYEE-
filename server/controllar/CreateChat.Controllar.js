
 const res = require('express/lib/response')
const {CreateChatModel} =require('../model/CreateChat.Model')

 const CreateChatControllar=(req,res)=>{

CreateChatModel(req.user.id,req.body.idtrender).then((d)=>{
    res.status(200).json({idchat:d});
    
    
     }).catch((e)=>{
         res.status(404).json({error:e})
     })
 }
 

 module.exports={CreateChatControllar}