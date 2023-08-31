const express=require("express")
const bodyparser=require('body-parser')
const userRoute=require('./routes/user')
const app =express()
app.use(bodyparser.json())
app.use("/user",userRoute)

module.exports=app;