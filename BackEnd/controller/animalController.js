const { DATE }=require("sequelize")
const models=require("../models")
const validateor=require('fastest-validator')
const date = require('date-and-time')
const vaccien=require("../models/vaccien")
function update_info_auto(req,res){
    models.vaccien.findAll()
    .then(
        reult=>{
            models.vaccien_information.findOne({where:{id:reult.vacc_info_id}}).then(
                result=>{
                    var date1=new Date(reult.date_take_vac)
                    var nowDate = new Date(); 
                    var date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate(); 
                    var dada=new Date(date)
                    var diff=dada.getTime()-date1.getTime()
                    var numofday=diff/(1000 * 3600 * 24)
                    var numofdayvac=result.duration_ef*30
                    if(numofday<numofdayvac){

                    }
                    

                }
            ).catch()
        }
    )
    .catch()
}
function add_cac


function show_all_animal(req,res) {//tested

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
function search_animal(req,res) {//tested 1 issue server is off when i find
    const name=req.body.name
    
    models.animal.findOne({name:name}).then(
        result => {
            
            if(result){
                res.status(200).json(result)

            }
            else {
                res.status(404).json({
                    message:" error in search function404 "
                })
            }
            

        }

    ).catch(
        error => {
            res.status(500).json({
                message: "error in search function500"
            })
        }
    )
}

function add_animal(req,res) { 
    
    const animal={
        name: req.body.name,
        color: req.body.animal_color,
        age: req.body.age,
        gender: req.body.gender,
        place: req.body.animal_place,
        type:req.body.type,
        owner: req.session.username,
        urlImage:req.file.filename,
        Additional_details:req.body.details,
        
    }
    models.animal.create(animal).then(result => {
        if(req.session.username){
            res.json({
                Login:true,valid:true,result
            })
        }
        else {
        valid:false
        }

    }).catch(error => {
        res.status(500).json({
            message: "errrr",
            error: error
        })
    });
}
function destroy_animal(req,res) { //tested
    const id=req.params.id

    // const userId=1
    models.animal.destroy({ where: { id:id } }).then(result => {
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
function show_det(req,res){
const name="slkjd"
models.animal.findOne({where:{name:name}}).then(
    data=>{ 
        models.health_record.findOne({where:{animal_id:data.id}}).then(
            heal =>{
                models.vaccien.findOne({where:{id:heal.vaccien_record}}).then(
                    vacc=>{
                        models.vaccien_information.findOne({where:{id:vacc.vacc_info_id}}).then(
                        vaccinfo=>{
                            return res.json({})
                        }
                        )
                        .catch()
                    }
                ).catch()
            }
        ).catch(

        )

    }
).catch(

)

}

module.exports={
    add_animal: add_animal,
    destroy_animal: destroy_animal,
    show_all_animal: show_all_animal,
    update:update,
    search_animal:search_animal,
    show_det:show_det

}