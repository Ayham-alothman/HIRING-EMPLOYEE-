const mongoose=require('mongoose');


const chat=new mongoose.Schema({
users:[mongoose.SchemaTypes.ObjectId]
})


module.exports=mongoose.model('chat',chat)