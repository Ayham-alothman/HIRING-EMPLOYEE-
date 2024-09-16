const Trender=require('./schema/Trender');
const Mongoose=require('mongoose');

const GelAllTrenderModel=()=>{
return new Promise((res,rej)=>{

    Mongoose.connect(process.env.MongoUrl).then((d)=>{

        Trender.find().then((d)=>{res(d)}).catch((e)=>{throw Error(e)})
        
        })//end connect mongo
                
})//end promise

}//end fun
module.exports={GelAllTrenderModel};