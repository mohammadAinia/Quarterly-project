const express=require("express")
const router=express.Router()
const animal_controller=require('../controller/animalController')
//

router.post ('/add-animal',animal_controller.add_animal)

module.exports=router