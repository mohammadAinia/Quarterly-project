//gffdgfdfcvbcvb
//vcvvcvcbvcvbvbbvcb
//vcbvbvcbvbvbvMMMM
var express = require('express')
var app = express()
var cors = require('cors')
var db = require('./model/db')
var session = require('express-session')
var cookie = require('cookie-parser')
var bodyparser =require('body-parser')
var bodyparser =require('body-parser')
app.use(cookie())
app.use(bodyparser.json())
app.use(session({
    // secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    secret: "secret",
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        secure: false
    },
    resave: false,
}))


app.use(cors({
    origin: ['http://localhost:3000'],
    methods:["Post" , "Get"],
    credentials: true
}))
app.use(express.json())

app.get('/', (req, res) => {
    if(req.session.username){
        return res.json({valid: true , username: req.session.username})
    }
    else
    return res.json({valid:false})
})

app.post('/login', (req, res) => {
    const sql = "select * from users where email =? AND password =?";

    db.query(sql, [req.body.email, req.body.password], (err, result) => {

        if (err) return res.json({ Message: 'Error inside server' })

        if (result.length > 0) {
            
            req.session.username = result[0].name
            console.log(req.session.username)
            return res.json({ Login: true, username: req.session.username })
        }
        else
            return res.json({ Login: false })
    })
})

app.post('/signup', (req, res) => {
    var name = req.body.First_name
    var email = req.body.Email
    var password = req.body.Password
    const sql = "insert into users (name , email , password) values('" + name + "','" + email + "','" + password + "')"
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "error node" })
        return res.json(result)
    })
})

app.listen(3001, () => {
    console.log('server is run')
})