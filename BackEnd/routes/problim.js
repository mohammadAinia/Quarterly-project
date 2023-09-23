const express=require("express")
const router=express.Router()
const problim=require("../controller/problim")

router.post("/add_problim",problim.add_problim)



module.exports=router