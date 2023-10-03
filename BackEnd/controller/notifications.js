const models=require("../models")
const db=require("../dbb/db")
const show_noti_id=(req,res)=>{
    const user= req.session.username
    sql='select * from notifications where email=?'
    db.query(sql,(err,result)=>{
        res.json(result)
    })
}

module.exports={
    show_noti_id:show_noti_id
}