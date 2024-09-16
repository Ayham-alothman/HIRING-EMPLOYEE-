
const {gettrender}=require('../model/GetOneTrender.Model')
const getonetrender=(req,res)=>{

    
gettrender(req.params.idtrender).then((d)=>{
    res.status(200).json({infotrender:d})  
}).catch((e)=>{res.status(404).json({erorr:e})})


}

module.exports={getonetrender};