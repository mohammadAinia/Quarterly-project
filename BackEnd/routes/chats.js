const express=require("express")
const router=express.Router()
const chat=require('../controller/chatController')

router.get('/show_chats',chat.show_chats)
router.get('/open_chat/:id',chat.open_chats)
router.post('/send_message/:id',chat.send_message_id)
router.post('/create_chat/:id',chat.creat_caht)
router.get('/search_user/:Type',chat.search_user)
router.get('/show_profile/:id',chat.show_pofile)
router.get('/search_vet',chat.search_vet)
 
// router.get



module.exports=router