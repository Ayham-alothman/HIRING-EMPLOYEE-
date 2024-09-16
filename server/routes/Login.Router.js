const express=require('express');
const Router=express.Router();
const Login=require('../controllar/LoginControllar');

Router.post('/',Login);

module.exports=Router;