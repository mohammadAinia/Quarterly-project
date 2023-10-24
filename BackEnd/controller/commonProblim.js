const models=require("../models")
const db=require("../dbb/db")
function show_all_comon_prob(req,res){
    if (req.session.username)
    sql='select * from common_problems'
    db.query(sql, (err, result) => {
        if (err) return res.json(err)
        return res.json(result) + console.log()
    }
    )
}
function add_common_problem(req,res){
    if(req.session.username){
    var title=req.body.title
    var desc=req.body.desc
    var animal_type=req.body.type
    var pub=req.session.username
    var sql="INSERT common_problems (title,disc,animal_type,publisher) VALUES('" + title + "','" + desc + "','" + animal_type + "','" + pub + "')"
    db.query(sql,(error,result)=>{
        if(error) {
            console.log(error)
        }
        else {
            return res.json({valid:true,result})
        }
    })
}
else {
    return res.json({valid:false})
}
}
function search(req,res){
    if(req.session.username){
        type=req.body.Type
    sql='select * from common_problems where animal_type=?'
    db.query(sql,[type],(error,result)=>{
        if(error){
            console.log(error)
        }
        else {
            return res.json({valid:true,result})
        }
    })
}
else   return res.json({valid:false})
}
module.exports={
    show_all_comon_prob:show_all_comon_prob,
    search:search,
    add_common_problem:add_common_problem
}