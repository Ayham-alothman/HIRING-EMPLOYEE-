const {IsToken}=require('../protect/Token')
const {CreateChatControllar}=require('../controllar/CreateChat.Controllar')
 const Router= require('express').Router();
  


Router.post('/',IsToken,CreateChatControllar )

 module.exports=Router;