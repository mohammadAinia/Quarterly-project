const express=require("express")
const router=express.Router()
const admin=require("../controller/admin")
const imageUploader = require('../helper/image_uploader')

router.post('/add_prod',imageUploader.upload.array('monfichier',20),admin.Add_product_store)
router.post('/add_category',imageUploader.upload.single('image'),admin.add_category)




router.get('/show_c',admin.show_c)



module.exports=router