const mongoose=require('mongoose');

  const mesages= new mongoose.Schema({
content:String,
date:Date,
idchat:mongoose.SchemaTypes.ObjectId,
})

module.exports=mongoose.model('mesages',mesages)