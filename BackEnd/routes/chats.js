const express=require("express")
const router=express.Router()
const chat=require('../controller/chatController')

router.get('/show_chats',chat.show_chats)
// router.get








module.exports=router