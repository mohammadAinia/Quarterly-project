const http =require('http')
const port=3001
const app =require('./app')
const server =http.createServer(app)
app.listen(port,()=>{
    console.log("server now is run && db connected")
})