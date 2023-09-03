const express=require("express")
const router=express.Router()
const userController =require('../controller/userController')
const requireAuth =require('../middelware/authMidlleware')
//sing-up
router.post('/sign-up', userController.singup)
//login
router.post('/login', userController.login)

router.get('/home',userController.show_users)
router.get('/logout', userController.logout)

//requireAuth.requireAuth,
module.exports=router