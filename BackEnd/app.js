const express=require("express")
const userRoute=require('./routes/user')
const animalRouts=require('./routes/animal')
const app =express()
var cors = require('cors')
var session = require('express-session')
const cookie = require('cookie-parser');
const bodyparser=require('body-parser')
const path =require("path")
app.use(cookie())
app.use(bodyparser.json())
app.use(session({
    secret: "secret",
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24*1000,
        secure: false
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



module.exports=app;