const models=require("../models")
const db=require("../dbb/db")
const show_noti=(req,res)=>{
    const user= req.session.username
    sql='select * from notifications where email=? AND checked=?'
    db.query(sql,[user,0],(err,result)=>{
        res.json(result)
    })
}
const check_not=(req,res)=>{
    var sql='update notifications set checked=? where id_notification=?';
    const qq=1;
    const notiid=req.params.id;
    db.query(sql,[qq,notiid],(error,result)=>{
        if(error)console.log(error)
        res.json({result,valid:true})
    })
    
}
module.exports={
    show_noti:show_noti,
    check_not:check_not
}