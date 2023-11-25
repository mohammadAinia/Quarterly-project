const models=require("../models")
const db=require("../dbb/db")
var mysql = require('mysql');

function show_chats(req,res){
    if(req.session.username){
    var sql='select chat_id,first_name,reciver from chats join user_infos on chats.reciver=user_infos.email where chats.Sender=?'
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
    var id=req.params.id
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
                sqlll='select chat_id from chats where reciver=? '
                db.query(sqlll,[result[0].email],(error,result12)=>{
                    return res.json({valid:true,result12:result12[0].chat_id})
                })
                
            })
            })
        })
    })
}
else return res.json({valid:false})
}
function open_chats(req,res){
    if(req.session.username){
    var id =req.params.id
    var sql='select * from chats where sender=? AND chat_id=?'
    db.query(sql,[req.session.username,id],(error,result)=>{
        var sqll='select * from messages where special_id=?'
        db.query(sqll,result[0].special,(error,result2)=>{
            if(error)console.log(error)
            return res.json({result2,name:result[0].reciver,idd:result[0].chat_id,result,valid:true})
        })
    })
}
else return res.json({valid:false})
}
function send_message_id(req,res){
    if(req.session.username){
     var id=req.params.id
    sql='select * from chats where chat_id=? AND Sender=?'
    db.query(sql,[id,req.session.username],(err,reslt)=>{
        var text=req.body.Message
        var sqlll= "INSERT messages (message,chat_id,special_id) VALUES('" + text + "','" + reslt[0].chat_id + "','" + reslt[0].special + "')"
        db.query(sqlll,(err,reslt11)=>{
            return res.json({valid:true,reslt11})
        })
    })
}
else return res.json({valid:false})
}
function search_user (req,res){
    if(req.session.username){
    var type=req.params.Type
    sql='select * from user_infos where email IN (select owner from animals  where type=? AND owner!=? AND owner not in(select reciver from chats where Sender=?))'
    db.query(sql,[type,req.session.username,req.session.username],(err,result)=>{
        if(err) console.log(err)
        console.log(result)
        return res.json({valid:true,result})
    })
    
}
else return res.json({valid:false})
}
function show_pofile(req,res){
    if(req.session.username){
        sqlll='select reciver from chats where chat_id=?'
        sql='select * from user_infos where email=?'
            db.query(sqlll,[req.params.id],(err,ress)=>{
                db.query(sql,[ress[0].reciver],(error,result)=>{
                    sqll='select DISTINCT type from animals where owner=?'
                    db.query(sqll,[result[0].email],(errr,results)=>{
                        res.json({result,valid:true,results})
                    })
                })
            })

    }
    else 
    res.json({valid:false})
}
function search_vet (req,res){
    if(req.session.username){
    var name=req.params.Type
    sql='select * from user_infos where email IN (select email from user_infos  where first_name=? AND email!=? AND owner not in(select reciver from chats where Sender=?))'
    db.query(sql,[name,req.session.username,req.session.username],(err,result)=>{
        if(err) console.log(err)
        console.log(result)
        return res.json({valid:true,result})
    })
    
}
else return res.json({valid:false})
}
module.exports={show_chats:show_chats,
show_user:show_user,
creat_caht:creat_caht,
open_chats:open_chats,
send_message_id:send_message_id,
search_user:search_user,
show_pofile:show_pofile,
search_vet:search_vet
}

// db.query("select * from user_infos join animals on animals.owner=user_infos.email where animals.type="+mysql.escape(type) +")"
