const express=require("express")
const router=express.Router()
const commonProblim=require("../controller/commonProblim")

router.get("/show_all_com",commonProblim.show_all_comon_prob)
router.post("/search",commonProblim.search)
router.post('/add_common',commonProblim.add_common_problem)
module.exports=router