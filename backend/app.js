const express=require("express")
const authrouter= require("./routes/logins")
const updaterouter=require("./routes/userupdates")
const accountsrouter=require("./routes/accountsbal")
const cors=require("cors")

const app=express()
app.use(express.json())
app.use(cors())
app.use("/psg",authrouter)
app.use("/psg",updaterouter)
app.use("/psg",accountsrouter)

app.listen('3000',()=>{
 console.log("SERVER STARTED")
})
