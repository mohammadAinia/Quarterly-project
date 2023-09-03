const models=require("../models")
const validateor=require('fastest-validator')

// const show_all_animal=async (req,res)=>{
//     models.animal.findAll({})
// }
function add_animal(req,res){
    const animal={
        name: req.body.name,
        type: req.body.type,
        color: req.body.color,
        age: req.body.age,
        gender: req.body.gender,
        food_type: req.body.food_type,
        place: req.body.place,
        owner: req.body.owner,
        ownered: req.body.ownered,
        userId: 1
    }//object for save in my db
    const schema={
        name:{type:"string",optional:false},
        type:{type:"string",optional:false},
        color:{type:"string",optional:false},
        age:{type:"number",optional:false},
        gender:{type:"string",optional:false},
        food_type:{type:"string",optional:false},
        place:{type:"string",optional:false},
        owner:{type:"string",optional:true},

    }
    const v = new validateor()
    const validationRespo= v.validate(animal,schema)
    if (validationRespo !==true){
        return res.status(400).json({
          message:"validation faild",
          errors:validationRespo  
        })
    }

    models.animal.create(animal).then(result => {
        res.status(201).json({
            message: "animal add suc",
            // post: result
        })

    }).catch(error => {
        res.status(500).json({
            message: "errrr",
            error: error
        })
    });
}
module.exports={
    add_animal:add_animal
}