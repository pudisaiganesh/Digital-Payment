const zod=require("zod")

const userVal=zod.object({
    username:zod.string().min(6).max(12),
   firstname:zod.string(),
   lastname:zod.string(),
   email:zod.string().email(),
   password:zod.string().min(6).max(12),
})

module.exports=userVal