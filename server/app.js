//require 
const express= require('express');
let Cors=require('cors');
const BodyParser=require('body-parser');
require('dotenv').config()

//invoke
const app=express();


//use require
app.use(BodyParser.json());
app.use(Cors({origin:'*'}))




// import routes
const home=require('./routes/GetAllTrenders.Router');
const CreateTrender=require('./routes/AddTrender.Router');
const Signup=require('./routes/Signup.Router');
const Login=require('./routes/Login.Router');
const Chat=require('./routes/Chat.Router')
const CreateChat=require('./routes/CreateChat.Router')


// using routes
app.use('/',home);
app.use('/createtrender',CreateTrender);
app.use('/signup',Signup);
app.use('/login',Login);
app.use('/chat',Chat);
app.use('/createchat',CreateChat);






//app.post('/',(req,res,next)=>{
//    req.headers
//    console.log('pass')
//    console.log(req.body)
//     
//})

//app.get('/',(req,res,next)=>{
//    console.log('pass get')
//     req.params
//     res.status
//})



// listen server

const port= 2000;
app.listen(port,(err)=>{
if(err){
    console.log(Error(err))
}
else{

    console.log(`server is ready on port ${port}`)
}

})



