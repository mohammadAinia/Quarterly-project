const express=require("express")
const router=express.Router()
const animal_controller=require('../controller/animalController')
const imageUploader = require('../helper/image_uploader')

router.post('/add-animal',imageUploader.upload.single('image'),animal_controller.add_animal)
router.get('/show_all_animal',animal_controller.show_all_animal)
router.get('/show_det',animal_controller.show_det)
router.post('/add_vac',animal_controller.add_vac)

router.get('/search_animal',animal_controller.search_animal)
router.delete('/:id',animal_controller.destroy_animal)


module.exports=router