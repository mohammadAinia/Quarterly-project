const express=require("express")
const router=express.Router()
const store=require("../controller/store")
const imageUploader = require('../helper/image_uploader')

router.get('/new_arrivle',store.new_arrivle);
router.get('/sort_by_animal/:id',store.sort_by_animal);
router.get('/search_by',store.search_salary_and_category);
router.get('/open_proudact/:id',store.open_proudact);
router.get('/get_addtion/:selectedSize',store.show_detalis_s);
router.get('/get_by_brand/:id',store.select_prand);



router.post('/addrev/:id',store.add_rev);



module.exports=router     