const mongoose=require('mongoose');

const User=new mongoose.Schema({
name:String,
email:String,
password:String,
chatid:mongoose.SchemaTypes.ObjectId,
sendrequest:{type:[mongoose.SchemaTypes.ObjectId],default:[]} ,
reciverequest:{type:[mongoose.SchemaTypes.ObjectId],default:[]} ,
friend:{type:[mongoose.SchemaTypes.ObjectId],default:[]} ,
})

module.exports=mongoose.model('User',User);
