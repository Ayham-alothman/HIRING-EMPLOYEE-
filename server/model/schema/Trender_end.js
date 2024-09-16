const mongoose=require('mongoose');


const endtrender= new mongoose.Schema({
    trender:mongoose.SchemaTypes.ObjectId,
own:mongoose.SchemaTypes.ObjectId,
price:Number,
description:mongoose.SchemaTypes.ObjectId,
excutions:mongoose.SchemaTypes.ObjectId,

})


module.exports=mongoose.model('endtrender',endtrender)