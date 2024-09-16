const express=require('express');
const Router=express.Router();
const Signup=require('../controllar/Signup.Controllar')
Router.post('/',Signup);

module.exports=Router;