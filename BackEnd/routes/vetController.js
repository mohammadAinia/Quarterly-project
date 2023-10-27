const express=require("express")
const router=express.Router()
const vet=require("../controller/vetController")


router.get('/home_vet',vet.home_vat)
router.get('/allf',vet.all_an)



module.exports=router