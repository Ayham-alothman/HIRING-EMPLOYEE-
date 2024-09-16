 let {verify} =require('jsonwebtoken');


 const IsToken=(req,res,next)=>{    
   

    if(req.headers.authorization){
       let token= req.header('authorization');
        let infouser=verify(token,process.env.EnToken);
        
        req.user=infouser;
        
        next()
    
    }//end if condition
    else{
        res.status(403).json({erorr:"`do't found token"});
    }


}
module.exports={IsToken};