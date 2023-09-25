const express=require("express")
const router=express.Router()
const commonProblim=require("../controller/commonProblim")

router.get("/show_all_com",commonProblim.show_all_comon_prob)
module.exports=router