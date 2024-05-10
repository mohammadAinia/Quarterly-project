const express=require("express")
const router=express.Router()
const animal_controller=require('../controller/animalController')
const imageUploader = require('../helper/image_uploader')

router.post('/add-animal',imageUploader.upload.single('image'),animal_controller.add_animal)
router.post('/update/:id',imageUploader.upload.single('image'),animal_controller.update)


router.get('/show_all_animal',animal_controller.show_all_animal)
router.get('/show_all_animal_ad',animal_controller.show_all_animal_ad)

router.get('/show_det',animal_controller.show_det)
router.get('/show_animal_id/:id',animal_controller.show_animal_id)

router.post('/add_vac/:id',animal_controller.add_vac)

router.get('/search_animal',animal_controller.search_animal)
router.post('/delete/:id',animal_controller.destroy_animal)
        
router.get('/get_vacc/:id',animal_controller.show_vacc_for_animal)
router.get('/show_all_vac/:id',animal_controller.show_vacc_id)

router.get('/show_req',animal_controller.show_all__req)
router.get('/get_report/:id',animal_controller.get_report)

module.exports=router