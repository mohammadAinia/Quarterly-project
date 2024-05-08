const express=require("express")
const router=express.Router()
const sitting=require("../controller/sitting")
router.get('/show_requests',sitting.show_all_request)
router.get('/show_my_animals',sitting.show_my_animals)
router.get('/show_det/:id',sitting.show_det_req)
router.get('/show_req',sitting.show_confirmed_from_requester)
router.get('/show_owner',sitting.show_confirmed_from_sender)



router.post('/add_new_animal',sitting.add_new_req)
router.post('/check_set/:id',sitting.check_req)
router.post('/remove_set/:id',sitting.remove_req)

module.exports=router