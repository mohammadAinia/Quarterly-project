const express=require("express")
const router=express.Router()
const animal_controller=require('../controller/animalController')
//

router.post('/add-animal',animal_controller.add_animal)

router.get('/show_all',animal_controller.show_all)

router.delete('/destroy',animal_controller.destroy)


module.exports=router