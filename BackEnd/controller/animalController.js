const models=require("../models")
const validateor=require('fastest-validator')

function show_all(req,res) {

    models.animal.findAll().then(
        result => {
            res.status(200).json(result)
        }
    )
        .catch(
            error => {
                res.status(500).json({
                    message: "error in show all "+error
                })
            }
        )

}
function add_animal(req,res) {
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

    }//object for save in my db
    const schema={
        name: { type: "string",optional: false },
        type: { type: "string",optional: false },
        color: { type: "string",optional: false },
        age: { type: "number",optional: false },
        gender: { type: "string",optional: false },
        food_type: { type: "string",optional: false },
        place: { type: "string",optional: false },
        owner: { type: "string",optional: true },

    }
    const v=new validateor()
    const validationRespo=v.validate(animal,schema)
    if (validationRespo!==true) {
        return res.status(400).json({
            message: "validation faild",
            errors: validationRespo
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
function destroy(req,res) {
    const id=req.params.id

    // const userId=1
    models.animal.destroy({ where: { id: id } }).then(result => {
        res.status(200).json({
            message: "animal deleted",
        })
    }).catch(error => {
        res.status(500).json({
            message: "error in destroy function",
            error: error
        })
    });
}
function update(req,res) {
    const id=req.params.id
    const updateAnimal=
    {
        name: req.body.name,
        type: req.body.type,
        color: req.body.color,
        age: req.body.age,
        gender: req.body.gender,
        food_type: req.body.food_type,
        place: req.body.place,
        owner: req.body.owner,
        ownered: req.body.ownered,
    }

    models.animal.update(updateAnimal,{ where: { id: id } }).then(result => {
        res.status(200).json(result
            // {
            //     message: "post suc",
            //     // post:result
            // }
        )
    }).catch(error => {
        res.status(500).json({
            message: "update fun err",
            error: error
        })
    })
}
module.exports={
    add_animal: add_animal,
    destroy: destroy,
    show_all: show_all,
    update:update

}