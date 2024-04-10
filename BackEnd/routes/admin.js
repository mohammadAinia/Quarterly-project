const express=require("express")
const router=express.Router()
const admin=require("../controller/admin")
const imageUploader = require('../helper/image_uploader')

router.post('/add_prod',imageUploader.upload.array('monfichier',20),admin.Add_product_store)
router.post('/add_category',imageUploader.upload.array('monfichier'),admin.add_category)
router.post('/add_new_b',imageUploader.upload.array('monfichier'),admin.add_new_brand)




router.get('/show_c',admin.show_c)
router.get('/get_all_brand',admin.get_all_brand)



module.exports=router