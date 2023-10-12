const express=require("express")
const router=express.Router()
const noti=require("../controller/notifications")


router.get('/notifications',noti.show_noti)
router.put('/check_n/:id',noti.check_not)
module.exports=router