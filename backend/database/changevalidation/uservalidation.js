const zod=require("zod")

const userupdate=zod.object({
    password:zod.string().min(6).max(12)
   
})

module.exports=userupdate