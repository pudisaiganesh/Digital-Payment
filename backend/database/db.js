const mongoose=require("mongoose")
const userSchema=require("./schemas/user")
const accountSchema=require("./schemas/account")

console.log("DB INITIATED")

mongoose.connect("mongodb://localhost:27017/?retryWrites=true&loadBalanced=false&serverSelectionTimeoutMS=5000&connectTimeoutMS=10000/users")
const users=mongoose.model('User',userSchema)
const accounts=mongoose.model('Account',accountSchema)

module.exports={users,accounts}



