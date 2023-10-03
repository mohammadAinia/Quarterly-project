const models=require("../models")
const db=require("../dbb/db")
const show_noti=(req,res)=>{
    const user= req.session.username
    sql='select * from notifications where email=?'
    db.query(sql,[user],(err,result)=>{
        res.json(result)
    })
}

module.exports={
    show_noti:show_noti
}