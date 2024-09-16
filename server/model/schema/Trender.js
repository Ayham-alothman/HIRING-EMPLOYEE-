const mongoose= require('mongoose');
   const trender=   new mongoose.Schema({
      TypeWork:String ,
      Own:mongoose.SchemaTypes.ObjectId,
      Addres:String,
      TypeTrender: String,
      Budjet:String,
      date:{
         type:Date,
         default:Date.now(),
      },
      EndDate:Date,
      requests:{type:[],default:[]},
      description:mongoose.SchemaTypes.ObjectId

  })

  module.exports=mongoose.model('trender',trender);