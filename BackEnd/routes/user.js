const express=require("express")
const router=express.Router()
const userController =require('../controller/userController')
//sing-up
router.post('/sign-up', userController.singup)
//login
router.post('/login', userController.login)

module.exports=router