const express=require("express")
// const cookieParser = require('cookie-parser');
const bodyparser=require('body-parser')
const userRoute=require('./routes/user')
const app =express()
app.use(bodyparser.json())
app.use("/user",userRoute)
// app.use(cookieParser());


module.exports=app;