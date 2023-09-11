const express=require("express")
const router=express.Router()
const userController =require('../controller/userController')
const requireAuth =require('../middelware/authMidlleware')
//sing-up
router.post('/sign-up_user', userController.singup_user)
router.post('/sign-up_veto', userController.singup_veto)
router.post('/sign-up_vet', userController.singup_vet)


//login
router.post('/login', userController.login)

router.get('/home',userController.show_users)
router.get('/logout', userController.logout)

//requireAuth.requireAuth,
module.exports=router