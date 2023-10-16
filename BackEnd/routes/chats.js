const express=require("express")
const router=express.Router()
const chat=require('../controller/chatController')

router.get('/show_chats',chat.show_chats)
router.get('/open_char/:id',chat.open_chats)
router.post('/send_message/:id',chat.send_message_id)

// router.get



module.exports=router