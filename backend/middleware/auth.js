const JWT_SCRT=require("../config")
const jwt=require("jsonwebtoken")

const authroute=(req,res,next)=>{
    const authheader =req.headers.authorization

    if(!authheader || !authheader.startsWith("Bearer ")){
       return res.status(403).json({"msg":"Invalid authorization"})
    }
    
    const token=authheader.split(" ")[1]

    try{
        const decoded_user=jwt.verify(token,JWT_SCRT)
        console.log(decoded_user)
        if(decoded_user.userid){
           req.userid=decoded_user.userid
           next()
       }else{
        return res.status(403).json({"msg":"invalid login"})

       }

        
    }catch{
        return res.status(403).json({"msg":"Unbale to verify token"})
    }

}

module.exports={
    authroute
}