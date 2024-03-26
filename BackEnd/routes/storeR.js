const express=require("express")
const router=express.Router()
const store=require("../controller/store")
const imageUploader = require('../helper/image_uploader')

router.get('/new_arrivle',store.new_arrivle);


module.exports=router