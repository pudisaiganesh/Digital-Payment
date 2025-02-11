
const mongoose =require("mongoose")
const Schema=mongoose.Schema

const userSchema=new Schema({
    username:{type:String, required:true,minLength:6,unique:true},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    password:{type: String,required:true},
    email:{type:String,required:true,unique:true}

})



module.exports=userSchema