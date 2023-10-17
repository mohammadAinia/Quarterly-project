const express=require("express")
const router=express.Router()
const chat=require('../controller/chatController')

router.get('/show_chats',chat.show_chats)
router.get('/open_chat/:id',chat.open_chats)
router.post('/send_message/:id',chat.send_message_id)
router.post('/search_user',chat.search_user)

// router.get



module.exports=router