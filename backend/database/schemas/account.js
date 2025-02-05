const mongoose=require("mongoose")
const userSchema = require("./user")

const accountSchema=mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true

    },
    balance:{
        type:Number,
        required:true
    }
})

module.exports=accountSchema