var express = require('express')
var app = express()
var cors = require('cors')
var db = require('./model/db')
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.json('welcom')
})

app.post('/login',(req,res)=>{
    const sql ="select * from users where email =? AND password =?";

    db.query(sql,[req.body.email , req.body.password],(err,data)=>{
        if(err) return res.json('Error')
        if(data.length > 0)
        {
            return res.json("log in seccseful")
        }
        else
        return res.json('no record')
    })
})

app.listen(3001,()=>{
    console.log('server is run')
})