const express=require("express")
const userRoute=require('./routes/user')
const animalRouts=require('./routes/animal')
const problimRouter=require('./routes/problim')
const comprrout=require('./routes/comoonProb')
const notifications=require('./routes/notificationRouts')
const adoption=require('./routes/adoption')
const chat=require('./routes/chats')

const app =express()
var cors = require('cors')
var session = require('express-session')
const cookie = require('cookie-parser');
const bodyparser=require('body-parser')
const path =require("path")
const cookieParser=require("cookie-parser")
app.use(cookie())
app.use(bodyparser.json())
app.use(express.json())
app.use(session({
    secret: "secret",
    saveUninitialized: true,
    cookie: {
        expires:Date.now()+1000*60*60*24*7,
        maxAge: 1000 * 60 * 60 * 24*1000,
        httpOnly:true
        // secure: false
    },
    resave: false,
}))

app.use(cors({
    origin: ['http://localhost:3000'],
    methods:["Post" , "Get"],
    credentials: true
}))
app.use(express.urlencoded({
    extended: true,
    })
   );
   
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())

app.use("/user",userRoute)
app.use("/animal",animalRouts)
app.use("/problim",problimRouter)
app.use("/co_problim",comprrout)
app.use("/noti",notifications)
app.use("/adopt",adoption)
app.use("/chat",chat)


module.exports=app;