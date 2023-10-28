const express=require("express")
const router=express.Router()
const vet=require("../controller/vetController")
const medical=require("../controller/medical_reports")


router.get('/home_vet',vet.home_vat)
router.get('/allf',vet.all_an)
router.get('/show_req',vet.show_requsts)
router.get('/show_all_vet',vet.show_all_vet)
router.get('/profile/:id',vet.show_profile_vet)
router.get('/accept_requset/:id',vet.accept_req)
router.get('/addreq/:id/:id2',vet.add_req)

router.post('/medical/add_report/:id',medical.add_report)


module.exports=router