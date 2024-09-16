let {SubmissionModel}=require('../model/Submissio.Model')

const SubmissionControllar=(req,res)=>{
    
SubmissionModel(req.body).then((d)=>{
res.status(200).json({data:'add submission'})

}).catch((e)=>{
    res.status(404).json({e:e})
})

}//end fun
module.exports={SubmissionControllar}