const express=require("express")
const router=express.Router()
const admin=require("../controller/admin")
const imageUploader = require('../helper/image_uploader')

router.post('/add_prod',imageUploader.upload.array('monfichier',20),admin.Add_product_store)



module.exports=router