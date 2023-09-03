const express=require("express")
const cookieParser = require('cookie-parser');
const bodyparser=require('body-parser')
const userRoute=require('./routes/user')
const animalRouts=require('./routes/animal')
const app =express()
app.use(bodyparser.json())
app.use("/user",userRoute)
app.use("/animal",animalRouts)
app.use(cookieParser());


module.exports=app;