const express=require("express")
const router=express.Router()
const sitting=require("../controller/sitting")
router.get('/show_requests',sitting.show_all_request)
router.get('/show_my_animals',sitting.show_my_animals)



router.post('/add_new_animal',sitting.add_new_req)

module.exports=router