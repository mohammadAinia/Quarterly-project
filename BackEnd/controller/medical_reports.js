const models=require("../models")
const db=require("../dbb/db")
function add_report(req,res){
    if(req.session.roleee=='doc'){
    var id=req.params.id
    var vet=req.session.username
    var report=req.body.report
    var next_vist=req.body.next_vist
    var current_date=req.body.current_date
    var sql="INSERT medical_report (rep_animal_id,vet,reportt,date_rep,next_vist) VALUES('" + id + "','" + vet + "','" + report + "','" + current_date + "','" + next_vist + "')"
    db.query(sql,(error,result)=>{
        if (error){console.log(error+"line 15")}
        else{
            return res.json({valid:true,result})
        }
    })
}
else{ 
    return res.json({valid:false})
}
}
function show_reports(req,res){
    if(req.session.username){
    id=req.params.id
    sql='select * from medical_report where rep_animal_id=?'
    db.query(sql,[id],(error,result)=>{
        return res.json({valid:true,result})
    })
    }
    else {
        return res.json({valid:false})
    }
}

module.exports={
    add_report:add_report,
    show_reports:show_reports,

}