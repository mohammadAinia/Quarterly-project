const models=require("../models")
const db=require("../dbb/db")

function show_chats(req,res){
    if(req.session.username){
    var sql='select * from chats where Sender=?'
    db.query(sql,[req.session.username],(error,result)=>{
        if(error)console.log(error)
        return res.json({valid:true,result})
    })
}
else return res.json({valid:false})
}
function show_user(req,res){
    if(req.session.username){
    sql='select email,first_name from user_infos'
    db.query(sql,(err,result)=>{
        return res.json({result})
    })
}
else return res.json({valid:false})
}
function creat_caht(req,res){
    if(req.session.username){
    var s= req.session.username
    var sql2='SELECT special FROM chats WHERE special=(SELECT max(special) from chats)'
    var sql1='select email from user_infos where id=?'
    db.query(sql1,[id],(error,result)=>{
        if(error) console.log(error)
        var reciver=result[0].email
        db.query(sql2,(error,result1)=>{
            if(error) console.log(error)
            var max =result1[0].special+1
            var sql= "INSERT chats (Sender,reciver,special) VALUES('" + s + "','" + reciver + "','" + max + "')"
            db.query(sql,(error,result2)=>{
                if(error)console.log(error)
                var sqll= "INSERT chats (Sender,reciver,special) VALUES('" + reciver + "','" + s + "','" + max + "')"
            db.query(sqll,(error,result3)=>{
                if (error) console.log(error)
                return res.json({valid:true})
            })
            })
        })
    })
}
else return res.json({valid:false})
}
function open_chats(req,res){
    if(req.session.username){
    var id =req.params.username
    var sql='select * from chats where sender=? AND special=?'
    db.query(sql,[req.session,username,id],(error,result)=>{
        var sqll='select * from messages where special=?'
        db.query(sqll,[id],(error,result2)=>{
            if(error)console.log(error)
            return res.json({result2,result,valid:true})
        })
    })
}
else return res.json({valid:false})
}
function send_message_id(req,res){
    if(req.session.username){
     var id=req.params.id
    sql='select chat_id from chats where special=? AND Sender=?'
    db.query(sql,[id,req.session.username],(err,reslt)=>{
        var text=req.body.Message
        var sqlll= "INSERT messages (message,chat_id,special_id) VALUES('" + text + "','" + reslt[0].chat_id + "','" + id + "')"
        db.query(sqlll,(err,reslt11)=>{
            return res.json({valid:true,reslt11})
        })
    })
}
else return res.json({valid:false})
}

module.exports={show_chats:show_chats,
show_user:show_user,
creat_caht:creat_caht,
open_chats:open_chats,
send_message_id:send_message_id
}