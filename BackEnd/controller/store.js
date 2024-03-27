const models=require("../models")
const db=require("../dbb/db")
function new_arrivle(req,res){
    if(req.session.username){
    sql='SELECT * FROM `proudact` WHERE DATEDIFF(CURRENT_DATE(),proudact.date_added)<10'
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
            
        }
    })
}
else res.json({valid:false})
}
function sort_by_animal(req,res){
    if(req.session.username)
 {   animal=req.body.animal
    db.query('SELECT * FROM proudact WHERE animal_type LIKE ?', ['%'+animal+'%'], (error, results) => {
    if (error) {
            console.error(error);
        } else {
            res.json({valid:true,results})
        }

    });}
    else res.json({valid:false})
}
function 

module.exports={
    new_arrivle:new_arrivle,
    sort_by_animal
}