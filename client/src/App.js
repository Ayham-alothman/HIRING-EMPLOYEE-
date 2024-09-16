 import React from 'react';
 import { Routes,Route,  BrowserRouter } from 'react-router-dom';


import Home from './pages/home/Home';
import Chat from './pages/chat/Chat';
import Creattre from './pages/createtre/Createtre';
import Login from './pages/login/Logn';
import Signup from './pages/signup/Signup';
import IdTrender from './pages/idtrender/IdTrender';
import Submission from './pages/submission/Sumission';
import Chatid from './pages/chatid/Chatid';
 
import Protectroute from './utilty/Protect.Route';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes >

  
            
      <Route path='/' element={<Home  />}></Route>
      <Route path='/:idtrender' element={<IdTrender />}></Route>
      
      <Route  element={<Protectroute  />}>
      
      <Route path='/createtrender' element={<Creattre  />}></Route>
      </Route>
      <Route path='/chat/:idchat' element={<Chatid  />}></Route>
      <Route path='/chat' element={<Chat  />}></Route>
      <Route path='/:idtrender/submission' element={<Submission />}></Route>
 
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login />}></Route>    
 
    </Routes>
    </BrowserRouter>
      </>
    
    
    
  ); 
}

export default App;
