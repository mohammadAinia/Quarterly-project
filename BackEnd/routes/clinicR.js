const express=require("express")
const router=express.Router()
const imageUploader = require('../helper/image_uploader')

const clinic=require("../controller/clinic")
router.get('/add_to_clinic/:id',clinic.add_doc_to_cli)
router.get('/showall',clinic.show_all)
router.get('/showall_without_clinc',clinic.show_all_vet_without_clinic)
router.get('/show_under',clinic.show_all_under)


router.post('/add_new_vet',imageUploader.upload.single('image'),clinic.singup_vet_from_admin)

module.exports=router 