const models=require("../models")
const db=require("../dbb/db")
const bcryptjs=require("bcryptjs");
const { DATE }=require("sequelize");


function get_p(req,res){
    sql='select * from gallery where animal_id=?'
    db.query(sql,[req.params.id],(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
        }
    })
}

function addnew(req,res){
    for (let i = 0; i < req.files.length; i++) {
    sql="insert into gallery (animal_id,photo_url) values ('"+req.params.id+"','"+req.files[i].filename+"')"
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        
    })
}
res.json({valid:true})
}
function remove_p (req,res){
    sql='delete from gallery where p_id=?'
    db.query(sql,[req.params.id],(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
        }
    })
}
module.exports={
get_p,
addnew,
remove_p
}
