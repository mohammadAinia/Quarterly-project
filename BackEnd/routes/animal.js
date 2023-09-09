const express=require("express")
const router=express.Router()
const animal_controller=require('../controller/animalController')
//

router.post('/add-animal',animal_controller.add_animal)
router.get('/show_all_animal',animal_controller.show_all_animal)
router.get('/search_animal',animal_controller.search_animal)
router.delete('/:id',animal_controller.destroy_animal)


module.exports=router