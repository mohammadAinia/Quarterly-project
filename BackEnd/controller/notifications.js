const models=require("../models")
const db=require("../dbb/db")
const show_noti=(req,res)=>{
    if(req.session.username){
    const user= req.session.username
    sql='select * from notifications where email=? AND checked=?'
    db.query(sql,[user,0],(err,result)=>{
        res.json({result,valid:true})
    })
}
else return res.json({valid:false})

}
const check_not=(req,res)=>{
    var sql='update notifications set checked=? where id_notification=?';
    const qq=1;
    const notiid=req.params.id;
    var sqll='select title ,special,animal_id from notifications where id_notification=? '
    db.query(sql,[qq,notiid],(error,result)=>{
        if(error)console.log(error)
        db.query(sqll,[notiid],(error,result2)=>{
            if(error)console.log(error)
            else if(result2[0].title=="adoption")
            {
                var sql11='update animals set owner =? where id=?'
                db.query(sql11,[result2[0].special,result2[0].animal_id],(err,result3)=>{
                    var qwe='update adoption set status_id=? where id_animal=?'
                    db.query(qwe,[1,result2[0].animal_id],(err,result4)=>{
                        res.json({result,valid:true})
                    })
                    
                })
            }
            else
            res.json({result,valid:true})
        })
    })
    
}
module.exports={
    show_noti:show_noti,
    check_not:check_not
}