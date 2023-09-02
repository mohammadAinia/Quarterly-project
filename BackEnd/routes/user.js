const express=require("express")
const router=express.Router()
const userController =require('../controller/userController')
const requireAuth =require('../middelware/authMidlleware')
//sing-up
router.post('/sign-up', userController.singup)
//login
router.post('/login', userController.login)

// router.get('/home',requireAuth,(req,res)=>{console.log("jsjs")})

module.exports=router