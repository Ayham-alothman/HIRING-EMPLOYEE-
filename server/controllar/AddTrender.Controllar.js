const AddTrenderModel=require('../model/AddTrender.Model')
 let {ObjectId} =require('mongodb')
const AddTrender=(req,res)=>{

 

req.body.Own=new ObjectId(req.user.id);

AddTrenderModel(req.body).then((d)=>{res.status(200).json({info:d})})
.catch((e)=>{res.status(404).json({infoer:e})})




}//end fun

module.exports=AddTrender;