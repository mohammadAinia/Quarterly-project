const models=require("../models")
const animalcon=require('./animalController')
const db=require("../dbb/db")
const add_to_adlist_id=(req,res)=>{
    const user= req.session.username
    const animal_id =req.params.id
    var d=new Date()
    var datee = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    var sql= "insert into adoption (id_animal,current_owner,requester,status_id,shared_at) values ('" + animal_id + "','" + user + "','" + "" + "','" + animal_type + "','" + 0 + "','" + datee + "')"
    db.query(sql,(err,result)=>{
        if(err){console.log(err+"err here is adoption")}
        res.json(result)
    })
}
const show_ad_animal=(req,res)=>{
    sql1=' select * from adoption join animals on animals.id=adoption.id_animal join health_records on health_records.animal_id=animals.id where animals.owner !=? AND status_id=?'
    db.query(sql1,[req.session.username,0],(err,result)=>{
        if(err)console.log(err)
        res.json({result,valid:true})
    })
}
const adopt_an=(req,res)=>{
    var id=req.params.id
    var sql='update animals set owner=? where id=?'
    var sql1='update adoption set status_id=? where id_animal=?'
    db.query(sql,[req.session.username,id],(err,resultt)=>{
        if(err)console.log(err)
        db.query(sql1,[1,id],(err,result)=>{
            if(err)console.log(err)
            res.json({result})            
        })
    })
}

module.exports={
    add_to_adlist:add_to_adlist_id ,
    show_ad_animal : show_ad_animal,
    adopt_an:adopt_an
}
