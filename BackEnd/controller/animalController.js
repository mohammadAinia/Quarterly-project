const { DATE, where }=require("sequelize")
const models=require("../models")
const validateor=require('fastest-validator')
const date = require('date-and-time')
const vaccien=require("../models/vaccien")
const db=require("../dbb/db")
function update_info_auto(req,res){//
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
function add_vac(req,res){
    const iddd =req.params.id

    models.health_record.findOne({where:{animal_id:iddd}}).then(
        result => {
            
            models.vaccien_information.findOne({where:{id:1}}).then(////.mdnflkadlfkjakmddlkamskdmaksmdkamdkmaksmmask.dm.asmdc
                ress=>{
                    var date1=ress.duration_ef*30
                    const d = new Date();
                    var resultt = d.setDate(d.getDate() + date1);
                    var dad=new Date(resultt)
                    var date = dad.getFullYear()+'/'+(dad.getMonth()+1)+'/'+dad.getDate(); 
                    var dada=new Date(date)
                    information_vac={
                        date_take_vac:req.body.Vaccine_history,
                        vacc_info_id:ress.id,
                        animal_id:result.animal_id,
                        health_record_id:result.id,
                        next_appointment:dada
                    }
                    console.log(iddd+"thsslkjjflksmd")
                    models.vaccien.create(information_vac).then(
                    result=>{
                        res.json({valid:true})
                    }
                    ).catch(error => {
                        console.log(error)

                        res.status(500).json({
                            message: "error in add vac "+error
                        })
                    })
                }
            ).catch(error => {
                console.log(error)
                res.status(500).json({
                    message: "error in add vac "+error
                })
            })
        }
    ).catch(error => {
        console.log(error)

        res.status(500).json({
            message: "error in add vac "+error
        })
    })
}
function show_all_animal(req,res) {//tested
    const sql='SELECT * FROM animals JOIN health_records ON animals.id=health_records.animal_id WHERE owner=?'
    db.query(sql,["Msxsxo@Hotmai.Com"], (err, result) => {
        if (err) return res.json(err)
        return res.json(result) + console.log()
    }
    )

    // models.animal.findAll({where:{owner:req.session.username}}).then(
    //     result => {
    //         const ress=[result]
    //         res.json(ress)
    //     }
    // )
    //     .catch(
    //         error => {
    //             console.log(error+"the error in show all animal function")
    //             res.json({
    //                 message: "error in show all "+error
    //             })
    //         }
    //     )

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
function add_animal(req,res) { //tested
    
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

        models.animal.findOne({where:{id:result.id}}).then(
            result=>{
                const record ={
                    animal_id:result.id,
                    weight:req.body.weight,
                    high:req.body.height,
                    health_stats:req.body.health_Status,
                    vaccien_record:result.id
                }
                models.health_record.create(record).then(
                    result=>{
                        return res.json({valid:true,session:req.session.username,id:result.animal_id})
                    }
                ).catch()
            }
        ).catch()
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
        // color: req.body.color,
        age: req.body.age,
        gender: req.body.gender,
        food_type: req.body.food_type,
        place: req.body.place,
        // owner: req.body.owner,
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
function show_animal_id(req,res){
    const id = req.params.id;
    const sql='SELECT * FROM animals JOIN health_records ON animals.id=health_records.animal_id WHERE animals.id=? '
    db.query(sql,[id],(err, result) => {
        if (err) return res.json(err)
        return res.json(result)+ console.log()
    })
}
function show_det(req,res){
const id=req.body.id
models.animal.findOne({where:{id:id}}).then(
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
    show_det:show_det,
    add_vac:add_vac,
    // show_animal_id:show_animal_id
}