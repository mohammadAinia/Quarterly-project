const { json }=require("body-parser");
const models=require("../models");
const bcryptjs=require("bcryptjs");
const db=require("../dbb/db")
function show_my_animals(req,res){
    sql='SELECT * from animals where id not in (select animal_id from sitting where date_to> CURRENT_DATE ) and owner=?'
    db.query(sql,[req.session.username],(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
            
        }
    })
}
function show_all_request(req,res){
    sql='select * from sitting join animals on animals.id=sitting.animal_id where check_status=? and owner_id!=?  '
    db.query(sql,[0,req.session.username],(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
        }
    })
}
function add_new_req(req,res){
    idA=req.body.Chosen_animal
    price=req.body.Fare
    datee=req.body.DateFrom
    datto=req.body.DateTo
    sql="insert into sitting(owner_id,animal_id,date_from,date_to,Service_price,check_status)values ('"+req.session.username+"','"+idA+"','"+datee+"','"+datto+"','"+price+"','"+0+"')"
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
        }
    })
}
function show_det_req(req,res){
    id=req.params.id
    sql='SELECT * from animals join user_infos on user_infos.email=animals.owner join health_records on health_records.animal_id=animals.id join sitting on sitting.animal_id=animals.id where sitting.si_id=?'
    db.query(sql,[id],(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
            
        }
    })
}
function check_req(req,res){
    if(req.session.username){
    id=req.params.id
    sql='update sitting set requester_id=?,check_status	=? where si_id=?'
    db.query(sql,[req.session.username,1,id],(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
        }
    })
}
else {
    res.json({valid:false})
}
}
module.exports={
    show_all_request,
    show_my_animals,
    add_new_req,
    show_det_req,
    check_req
}