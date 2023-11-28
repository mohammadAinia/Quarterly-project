const express=require("express")
const router=express.Router()
const userController =require('../controller/userController')
const imageUploader = require('../helper/image_uploader')
const profileCons =require('../controller/profileController')

//sing-up
router.post('/signup_user', userController.singup_user)
router.post('/signup_vet',imageUploader.upload.single('image'), userController.singup_vet)


//login
router.post('/login', userController.login)

router.get('/',userController.home_owner)
router.post('/logout', userController.logout)
// profile

router.get('/show_pofile',profileCons.show_pofile)
router.post('/check_password',profileCons.check_password)
router.post('/edit_info',profileCons.edit_info)


//requireAuth.requireAuth,
module.exports=router
