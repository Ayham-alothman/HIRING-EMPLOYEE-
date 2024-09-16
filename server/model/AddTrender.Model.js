


const Trender=require('./schema/Trender');
const mongoose=require('mongoose'); 

const AddTrender=(indata)=>{
console.log(indata)

return new Promise((res,rej)=>{
    mongoose.connect(process.env.MongoUrl ).then((d)=>{
        console.log(`connected with mongo`)
        
        Trender.create(indata)
        .then((d)=>{res(d);console.log('resolve')})
        .catch((e)=>{ rej(e);console.log(e) });
        
        
        })


})//end promise
}//end fun

module.exports=AddTrender;