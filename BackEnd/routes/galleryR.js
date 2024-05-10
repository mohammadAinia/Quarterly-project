const express=require("express")
const router=express.Router()
const imageUploader = require('../helper/image_uploader')
const gallery=require("../controller/gallery")



router.get('/get_photo/:id',gallery.get_p)
// router.post('/add_new_photo/:id',gallery.addnew)
router.post('/add_new_photo/:id',imageUploader.upload.array('monfichier',20),gallery.addnew)
router.post('/remove/:id',gallery.remove_p)






module.exports=router