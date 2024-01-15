const express=require("express")
const router=express.Router()
const clinic=require("../controller/clinic")
router.get('/adopt/:id',clinic.add_doc_to_cli)

module.exports=router