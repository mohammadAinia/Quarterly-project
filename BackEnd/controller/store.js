const models=require("../models")
const db=require("../dbb/db")
function new_arrivle(req,res){
    sql='SELECT * FROM `proudact` WHERE DATEDIFF(CURRENT_DATE(),proudact.date_added)<10'
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
            
        }
    })
}
module.exports={
    new_arrivle:new_arrivle,
}