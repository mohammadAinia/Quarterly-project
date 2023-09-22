
var express = require('express')
var app = express()
var cors = require('cors')
var db = require('./model/db')
var session = require('express-session')
var cookie = require('cookie-parser')
var bodyparser = require('body-parser')
var multer = require('multer')
var path = require('path')

app.use(express.static(path.join(__dirname, 'puplic')))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'puplic/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })


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
    // methods: ["Post", "Get"],
    credentials: true
}))
app.use(express.json())

// app.get('/', (req, res) => {
//     if(req.session.username){
//         return res.json({valid: true , username: req.session.username})
//     }
//     else
//     return res.json({valid:false})
// })
app.get('/', (req, res) => {
    db.query('select * from users', (err, result) => {
        if (err) return res.json(err)
        return res.json(result)
    })
})
app.get('/animals', (req, res) => {
    db.query('select * from animal', (err, result) => {
        if (err) return res.json(err)
        return res.json(result)
    })
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

// app.post('/signup', upload.single('image') , (req, res) => {
//     var image = req.file.filename
//     var name = req.body.first_name
//     var email = req.body.email
//     var password = req.body.password
//     const sql = "insert into users (name , email , password , image) values('" + name + "','" + email + "','" + password + "','" + image + "')"
//     db.query(sql, (err, result) => {
//         if (err) return res.json({ Message: "error node" })
//         return res.json(result)
//     })
// })
app.post('/signup', (req, res) => {
    var name = req.body.First_name
    var email = req.body.Email
    var password = req.body.Password
    var vaccines = req.body.Veccines
    const sql = "insert into users (name , email , password ,Veccines ) values('" + name + "','" + email + "','" + password + "','"+vaccines+"')"
    db.query(sql, (err, result) => {
        if (err) return res.json(err)
        return res.json(result)
    })
})
app.post('/add_animal', upload.single('image'), (req, res) => {
    var image = req.file.filename
    var name = req.body.name
    const sql = "insert into animal (name , image) values('" + name + "','" + image + "')"
    db.query(sql, (err, result) => {
        if (err) return res.json(err)
        return res.json(result)
    })
})

app.get('/edit/:id', (req, res) => {
    const sql = 'select * from animla where id = ?'
    const id = req.params.id
    db.query(sql, [id], (err, result) => {
        if (err) return res.json(err)
        return res.json(result)

    })
})


app.delete('/delete/:id', (req, res) => {
    const sql = "delete from animal where id =?"
    const id = req.params.id
    db.query(sql, [id], (err, result) => {
        if (err) return res.json(err)
        return res.json(result)
    })
})

app.put('/update/:id', upload.single('image'),(req, res) => {
    var image = req.file.filename
    var name = req.body.name
    const id = req.params.id
    const sql = 'update animal set name=? where animal_id=? '
    db.query(sql,[name ,id], (err, result) => {
        if (err) return  console.log(err) + res.json(err)
        return res.json(result)
    })
})

app.listen(3001, () => {
    console.log('server is run')
})