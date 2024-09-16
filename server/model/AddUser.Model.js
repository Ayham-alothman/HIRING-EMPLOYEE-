const User=require('./schema/User');
const Bcrypt= require('bcrypt');

const Mongoose=require('mongoose');
const { hash } = require('bcrypt');
const { default: mongoose } = require('mongoose');

const Login=(indata)=>{

return new Promise((res,rej)=>{
  Mongoose.connect(process.env.MongoUrl).then((d)=>{
  
User.findOne({email:indata.email}).then((d)=>{
if(d==null){   rej('the email do not found')}
else if(d){
Bcrypt.compare(indata.password,d.password).then((d)=>{
  if(d){  
    User.findOne({email:indata.email}).then((d)=>{
      res(d)
    }).catch((e)=>{console.log(e)})
  } 
else{rej(`password is false`)}        })
.catch((e)=>{console.log(`there problem in compare bcrypt ${Error(e)} `)})
}//end elseif

})//end then


})//end connected mongo

})//end promise

}//end fun Login


const Signup=(indata)=>{
  
   return new Promise((res,rej)=>{
Mongoose.connect(process.env.MongoUrl).then(()=>{
User.findOne({email:indata.email}).then((d)=>{
if(d){rej('the email is exsisit')}
else if(d==null){ 
  Bcrypt.hash(indata.password,10).then((d)=>{
    indata.password=d;
      User.create(indata).then((d)=>{res(d)}).catch((e)=>{rej(e)});
  })

}

})


})//end connected mongo
})//end promise 
}//end fun

module.exports={Login,Signup}