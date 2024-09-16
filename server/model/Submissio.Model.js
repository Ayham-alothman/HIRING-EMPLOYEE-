const Mongoose =require('mongoose');
 const Trender= require('./schema/Trender');
  const SubmissionModel=(indata)=>{
   return new Promise((res,rej)=>{
   Mongoose.connect(process.env.MongoUrl).then((d)=>{
       
   Trender.findById(indata.NTrender).then((d)=>{
    
        d.requests.push({price:indata.Price,time:indata.Time})    //{price:indata.Price,time:indata.Time}
        return d 
       
   }).then((d)=>{
d.save();
res(d)
   })
   .catch((e)=>{rej(e)})

   })




   })//end promise
 }//end fun
 module.exports={SubmissionModel};