const express=require("express")
const mongoose=require("mongoose")

require("dotenv").config()

const app=express()
const PORT=process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("MongoDb connected")
})
.catch((err)=>{
    console.log("MONGODB Connection failed:",err);
})

app.listen(PORT,()=>{
    console.log(`Server listening at PORT :${PORT}`)
    console.log();
})