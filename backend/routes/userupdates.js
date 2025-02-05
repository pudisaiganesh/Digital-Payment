const express=require("express")
const { authroute } = require("../middleware/auth")
const userval=require("../database/changevalidation/uservalidation")
const {users}=require("../database/db")
const {Types}=require("mongoose")
const router=express.Router()

router.put("/update",authroute,async (req,res)=>{
    const reqbody=req.body
 
    const validation=userval.safeParse(reqbody)
    
    if(!validation.success){
         return res.status(403).json({"msg":"password can only be updated"})
     } 
    
    const user =await users.updateOne({_id:req.userid},reqbody)
    return res.status(200).json()({"msg":"autorized"})
})


router.get("/users::filter",authroute,async (req,res)=>{
   const filter=req.params.filter
   console.log(filter)
   try{
   const users_fil=await users.find({"firstname":{$regex:filter}})

   return res.status(200).json({
    "users":users_fil.map(user=>({
        username:user.username,
        firstname:user.firstname,
        lastname:user.lastname,
        id:user._id
    }))
   })}catch(Error){
    return res.status(404).json({"msg":"Error occured"})
   }

})
module.exports=router