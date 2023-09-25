const express=require("express")
const router=express.Router()
const problim=require("../controller/problim")

router.post("/add_problim",problim.add_problim)
router.post("/add_answer/:id",problim.add_answer)


module.exports=router