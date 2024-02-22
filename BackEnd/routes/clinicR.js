const express=require("express")
const router=express.Router()
const clinic=require("../controller/clinic")
router.get('/adopt/:id',clinic.add_doc_to_cli)
router.get('/showall',clinic.show_all)

module.exports=router