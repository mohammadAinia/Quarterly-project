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
    if(req.session.username){
    const iddd =req.params.id
    console.log(iddd+"this is id")
    sql='select * from health_records where animal_id=?'
    db.query(sql,[iddd],(err,result)=>{
        models.vaccien_information.findOne({where:{id:req.body.Name_vaccines}}).then(
        ress=>{
            var count_days=ress.duration_ef*30
            var date=new Date(req.body.Vaccine_history)
            var newDate=new Date(date)
            newDate.setDate(date.getDate()+count_days)
            console.log(newDate)
            var datee = newDate.getFullYear()+'-'+(newDate.getMonth()+1)+'-'+newDate.getDate();
            console.log(datee)
            var date_take_vac=req.body.Vaccine_history
            var vacc_info_id=ress.id
            var animal_id=result[0].animal_id
            var health_record_id=result[0].id
            var sqll= "INSERT vacciens (date_take_vac,vacc_info_id,animal_id,health_record_id,next_appointment) VALUES('" + date_take_vac + "','" + vacc_info_id + "','" + animal_id + "','" + health_record_id + "','" + datee + "')"
        db.query(sqll,(err,ress)=>{
            res.json({valid:true})
        })
        }
    ).catch(error => {
        console.log(error)
        res.status(500).json({
            message: "error in add vac "+error
        })
    })
    })
}
else  res.json({valid:false})

}
function show_vacc_id(req,res){
    if(req.session.username){
    var id=req.params.id
    var sqll='select vaccien_informations.name_vacc,vacciens.date_take_vac from vaccien_informations join vacciens on vaccien_informations.id=vacciens.vacc_info_id  where vacciens.animal_id=?'
    db.query(sqll,[id],(err,result)=>{
        if(err)console.log(err)

        return res.json({result,valid:true})
    })
}
else return res.json({valid:false})
}
function show_all_animal(req,res) {
    if(req.session.username){
    const sql=' SELECT * from animals JOIN health_records on animals.id=health_records.animal_id  WHERE animals.owner=?'
    db.query(sql,[req.session.username], (err, result) => {
        if (err) return res.json(err)
        return res.json({result,valid:true}) + console.log()
    }
    )
}
else 
return res.json({valid:false})
}
function show_all_animal_ad(req,res) {
    const sql='SELECT * from animals WHERE owner=? '
    db.query(sql,[req.session.username], (err, result) => {
        if (err) return res.json(err)
        return res.json({result,valid:true})
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
function add_animal(req,res) { //tested
    if(req.session.username){
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
else return res.json({valid:false})

}
function destroy_animal(req,res) { //tested
   
        const sql = "delete from animals where id =?"
        const id = req.params.id
        db.query(sql, [id], (err, result) => {
            if (err) return res.json(err)
            const sq2l = "delete from health_records where animal_id =?"
            db.query(sq2l,[id],(err,ress)=>{
                const sql1 = "delete from vacciens where animal_id =?"
                db.query(sql1,[id],(errs,resss)=>{
                    return res.json(result)
                })
            })
        })
    
}
function update(req,res) {
    const id=req.params.id
    var name = req.body.name
    var animal_place=req.body.animal_place
    var image=req.file.filename
    var Additional_details = req.body.Additional_details
    var owner=req.session.username
    var weight=req.body.weight
    var high=req.body.height
    var health_stats=req.body.health_Status
    var sql='update animals set name=?,place=?,Additional_details=?,urlImage=?,owner=? where id=? '
    db.query(sql,[name,animal_place,Additional_details,image,owner,id],(err, result) => {
        if (err) return res.json(err)
        else{
    var sqll='update health_records set weight=?,high=?,health_stats=? where animal_id=? '
    db.query(sqll,[weight,high,health_stats,id],(err, result) => {
        if (err) return res.json(err)+console.log(err)
        return res.json({valid:true}) + console.log()
    })
        }
    })
    // var image=req.file.filename
    // const updateAnimal=
    // {   urlImage:req.file.filename,
    //     name: req.body.name,
    //     place: req.body.animal_place,
    //     Additional_details:req.body.details,
    //     owner: req.body.owner,
    // }

    // models.animal.update(updateAnimal,{ where: { id: id } }).then(result => {
    //     health_record={
    //         weight:req.body.weight,
    //         high:req.body.height,
    //         health_stats:req.body.health_Status
    //     }
    //     models.health_record.update(health_record,{where:{animal_id:id}}).then(
    //         resultt=>{
    //             return res.json({valid:true})
    //         }
    //     ).catch()
    // }).catch(error => {
    //     res.status(500).json({
    //         message: "update fun err",
    //         error: error
    //     })
    // })
}
function show_animal_id(req,res){
    if(req.session.username){
    const id = req.params.id;
    const sql='SELECT * from animals JOIN health_records on animals.id=health_records.animal_id  WHERE animals.id=? '
    const sql2='select * from vacciens join vaccien_informations on vacciens.vacc_info_id=vaccien_informations.id where animal_id=?'
    //JOIN vacciens on animals.id=vacciens.animal_id JOIN vaccien_informations on vacciens.vacc_info_id=vaccien_informations.id
    db.query(sql,[id],(err, result) => {
        if (result.length==0) return res.json({value:true})
        else{
        db.query(sql2,[id],(err, result2) => {
            if (err) return res.json(err)
            console.log(result.length)
            const agee=result[0].age
            var today = new Date();
            var birthDate = agee
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
        
            return res.json({result ,result2,valid:true,age:age+"y  "+m+"  m"})+ console.log()
        })
    }
    })
}
else return res.json({valid:false})
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

function show_vacc_for_animal(req,res){
    var id=req.params.id
    var sql="SELECT type FROM animals where id =?"
    db.query(sql,[id],(err,result)=>{
        if(err) console.log(err)
        sqll='select * from vaccien_informations where animmal_type=?'
        db.query(sqll,[result[0].type],(erro,result2)=>{
            if(err) console.log(erro)
            console.log(result2)
            return res.json({result2,valid:true})
        })
    })
}

module.exports={
    add_animal: add_animal,
    destroy_animal: destroy_animal,
    show_all_animal: show_all_animal,
    update:update,
    search_animal:search_animal,
    show_det:show_det,
    add_vac:add_vac,
    show_animal_id:show_animal_id,
    show_all_animal_ad:show_all_animal_ad,
    show_vacc_for_animal:show_vacc_for_animal,
    show_vacc_id:show_vacc_id
}