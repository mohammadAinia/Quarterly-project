const express=require("express")
const router=express.Router()
const admin=require("../controller/admin")
const imageUploader = require('../helper/image_uploader')

router.post('/add_prod',imageUploader.upload.array('image',10),admin.Add_product_store)





module.exports=router