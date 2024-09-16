
  let {ObjectId}= require('mongodb');
const Trender=require('./schema/Trender');
const User= require('./schema/User');
const Chat =require('./schema/Chat')
const mongoose= require('mongoose');


const CreateChatModel =(iduser,idtrender)=>{
    return new Promise((res,rej)=>{

     mongoose.connect(process.env.MongoUrl).then(()=>{


     Trender.findById(idtrender).then((d)=>{
        const idown=d.Own;
        
        Chat.find({}).then((d)=>{
        
         const val=d.find((e)=>{
            if(e.users.includes(new ObjectId(iduser))&&e.users.includes(new ObjectId(idown))){
             
             return e;
            }
         })//end find

           if(val){ res(val._id) }
           else{
          Chat.create({users:[new ObjectId(iduser),new ObjectId(idown)]}).then((d)=>{

            res(d._id);
          }).catch((e)=>{rej(e)})

           }


        })//end then chat

        
     })//end then trender
  




     })//end connect




    })//end promise
    }//end fun
    
module.exports={CreateChatModel}