const express= require("express")

const app = express()

app.use("/",(req,res)=>{
    res.json({message:"hello from server"})
})

app.listen(9000,()=>{
    console.log("server runing")
})