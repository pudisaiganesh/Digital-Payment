const express=require("express")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
const userVal=require('../database/schemavaliadation/userVal')
const {users,accounts}=require("../database/db")
const JWT_SCRT=require("../../backend/config")
const { compareSync } = require("bcrypt")

const router=express.Router()


router.post("/signup",async (req,res)=>{

    const body=req.body
    const validation=userVal.safeParse(body)
   
    if(!validation.success){
        return res.status(403).json({"msg":"Wrong input provided","status":"403"})
        
    }
   
  
    const hashPassword = async (password) => {
        const saltRounds = 10; 
        const hashedPassword = await bcryptjs.hash(password, saltRounds);
        return hashedPassword;
      };


    
    const encryptedpassword=await hashPassword(body.password)
   
    try{
     
      const encryptedbody={
      "username":body.username,
    "firstname":body.firstname,
    "lastname":body.lastname,
    "password":encryptedpassword,
    "email":body.email
      }
     
      const user=await users.create(encryptedbody)
      const userid=user._id
      console.log(accounts)
      const account=await accounts.create({userid:user._id,balance:100})
      const token=jwt.sign({
        userid
      },JWT_SCRT)
      return res.status(200).json({"msg":"User Register","token":token,"status":"200"})
      
    }
    catch(Error){
        console.log(Error)
        return res.status(403).json({"msg":"Username / email already exits","status":"403"})
        
    }
})

router.get("/signin",async (req,res)=>{
   
   console.log(req.query)
    const username=req.query.username
    const password=req.query.password
    console.log(username)
    console.log(password)
    const userexists= await users.findOne({username:username})
    console.log(userexists)
    if(userexists==null){
        return res.status(403).json({"msg":"User does not exists","status":"403"})
        
    }

    const comparePassword = async (plainPassword, hashedPassword) => {
        const isMatch = await bcryptjs.compare(plainPassword, hashedPassword);
        return isMatch;
    };
    const match=await comparePassword(password,userexists.password)
    if(!match){
        return res.status(403).json({"msg":"Invalid user name or password","status":"403"})
        
    }

    const userid=userexists._id

    const token=jwt.sign({
        userid
    },JWT_SCRT)

    return res.status(200).json({"msg":"User Logined","token":token,"status":200})


})

module.exports=router