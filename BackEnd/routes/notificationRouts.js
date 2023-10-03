const express=require("express")
const router=express.Router()
const noti=require("../controller/notifications")


router.get('/notifications',noti.show_noti)

module.exports=router