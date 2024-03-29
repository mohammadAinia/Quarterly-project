const express=require("express")
const router=express.Router()
const store=require("../controller/store")
const imageUploader = require('../helper/image_uploader')

router.get('/new_arrivle',store.new_arrivle);
router.get('/sort_by_animal',store.sort_by_animal);
router.get('/search_by',store.search_salary_and_category);
router.get('/open_proudact/:id',store.open_proudact);


module.exports=router  