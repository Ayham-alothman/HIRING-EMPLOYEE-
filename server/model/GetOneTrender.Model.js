const Mongoose =require('mongoose');
const Trender=require('./schema/Trender');

 const gettrender=(idpara)=>{
return new Promise((res,rej)=>{
    Mongoose.connect(process.env.MongoUrl).then((d)=>{
    Trender.findById(idpara).then((d)=>{console.log(d);
        res(d)
    }).catch((e)=>{rej(e)})


})//end mongo connect

})//end promise

 }//end fun

 module.exports={gettrender}