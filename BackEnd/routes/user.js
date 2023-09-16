const express=require("express")
const router=express.Router()
const userController =require('../controller/userController')
const imageUploader = require('../helper/image_uploader')

//sing-up
router.post('/signup_user', userController.singup_user)
router.post('/signup_vet', userController.singup_vet)


//login
router.post('/login', userController.login)

router.get('/',userController.home_owner)
router.get('/logout', userController.logout)

//requireAuth.requireAuth,
module.exports=router