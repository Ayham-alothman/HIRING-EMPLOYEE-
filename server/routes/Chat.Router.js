const {ChatControllar} =require('../controllar/Chat.Controallar')

const {IsToken}=require('../protect/Token')

const Router =  require('express').Router();


Router.post('/',IsToken,ChatControllar)


module.exports=Router;