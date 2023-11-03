const express=require("express")
const router=express.Router()
const problim=require("../controller/problim")

router.post("/add_problim",problim.add_problim)
router.post("/add_answer/:id",problim.add_answer)
router.get("/show_problem/:id",problim.show_problem_id)
router.get("/show_all_problem",problim.show_all_problems)
router.get("/show_my_pob",problim.show_my_problems)
router.post('/update_problem/:id',problim.update_problem)
router.post('/delete/:id',problim.delete_problem)

module.exports=router