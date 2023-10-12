const express=require("express")
const router=express.Router()
const adoption=require("../controller/adoptionController")

router.get('/show_adop',adoption.show_ad_animal)
router.post('/add_to_ad_list/:id',adoption.add_to_adlist)
router.put('/adopt/:id',adoption.adopt_an)

module.exports=router