const express=require("express")
const { authroute } = require("../middleware/auth")
const { accounts } = require("../database/db")
const { default: mongoose } = require("mongoose")

const router=express.Router()

router.get("/balance",authroute,async (req,res)=>{
    try{
       console.log(req.userid)
       const useraccount=await accounts.find({"userid":req.userid})
       console.log(useraccount)
       return res.status(200).json({"balance":useraccount[0].balance})
    }catch(Error){
         return res.status(404).json({
        "msg":"unable to process request Try later"
    })
}
    
})

router.post("/transfer",authroute,async (req,res)=>{

    const session=await mongoose.startSession()

    session.startTransaction()
    const toaccount=req.body.toaccount
    console.log(toaccount)
    const usertoaccount =await accounts.findOne({"userid":toaccount}).session(session)
    console.log(usertoaccount)
    if(!usertoaccount){
         await session.abortTransaction()
         return res.status(404).json({"msg":"User Not found","status":"400"})
    }

    const userfromaccount=await accounts.findOne({"userid":req.userid}).session(session)
    console.log(userfromaccount)
    if(req.body.amount>userfromaccount.balance){
        await session.abortTransaction()
         return res.status(404).json({"msg":"Insuffcient balance","status":"400"})
    }

    console.log("entered")
    
    await accounts.updateOne({"userid":toaccount},{$inc:{"balance":req.body.amount}}).session(session)
    await accounts.updateOne({"userid":req.userid},{$inc:{"balance":-req.body.amount}}).session(session)

    console.log("ended")
    await session.commitTransaction()

    return res.status(200).json({"msg":"transfer succesful","status":"200"})


})
module.exports=router