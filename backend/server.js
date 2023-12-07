const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const routes=require('./routes/todo.routes.js')
require("dotenv").config()

const app=express()
const PORT=process.env.PORT || 5000

app.use(express.json())
app.use(cors())


mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("MongoDb connected")
})
.catch((err)=>{
    console.log("MONGODB Connection failed:",err);
})

app.use(routes)

app.listen(PORT,()=>{
    console.log(`Server listening at PORT :${PORT}`)
    console.log();
})