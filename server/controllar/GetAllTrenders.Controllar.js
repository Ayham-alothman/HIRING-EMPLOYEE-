  let {GelAllTrenderModel}=require('../model/GetAllTrenders.Model')


  const GetAllTrenders=(req,res)=>{
// con with db
GelAllTrenderModel().then((d)=>{
res.status(200).json({trenders:d})

}).catch((e)=>{
  res.status(404).json({error:e})

})


  }

  module.exports={GetAllTrenders};