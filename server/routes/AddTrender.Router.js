const  AddTrender= require('../controllar/AddTrender.Controllar');

const express= require('express');

const {IsToken}=require('../protect/Token')

const Router=express.Router();

Router.post('/',IsToken,AddTrender);  //AddTrender   

module.exports=Router;