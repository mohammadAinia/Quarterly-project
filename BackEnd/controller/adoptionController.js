const models=require("../models")
const db=require("../dbb/db")
const add_to_adlist_id=(req,res)=>{
    const animal_id =req.params.id
    const user= req.session.username
    var check='select * from adoprion where animal_id =?'
    var sql1='select * from animals where id=?'
db.query(check,[animal_id],(error,resss)=>{
    if (resss.length==0){
        db.query(sql1,[animal_id],(err,result2)=>{
            if(err)console.log(err)
            console.log(result2[0].owner)
            var d=new Date()
            var datee = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
            var sql= "insert into adoption (id_animal,current_owner,requester,status_id,shared_at) values ('" + animal_id + "','" + result2[0].owner + "','" + "" + "','" + 0 + "','" + datee + "')"
            db.query(sql,(err,result)=>{
                if(err){console.log(err+"err here is adoption")}
                res.json(result)
            })
    
        })
    }
    else {
        res.json(chack)

    }
})

}
const show_ad_animal=(req,res)=>{
    var a=0
    sql1="select animals.urlImage,animals.type,animals.age,animals.name,user_infos.phone,animals.id from adoption join animals on animals.id=adoption.id_animal JOIN user_infos on user_infos.email=animals.owner where adoption.status_id=? AND current_owner!=? AND animals.id not in (SELECT animal_id from notifications where special=?)  "

                db.query(sql1,[a,req.session.username,req.session.username],(err,result)=>{
                    res.json({result,valid:true})
                })
                    
    
}
const adopt_an=(req,res)=>{
    var id=req.params.id
    var qw='select animals.owner,animals.name, animals.id from animals where id=?'
    db.query(qw,[id],(err,result)=>{
        var nr=req.session.username+'ask you to adopt your animal'+result[0].name
        var av= "insert into notifications (title,details,email,animal_id,special) values ('" + "adoption" + "','" + nr + "','" + result[0].owner + "','" + result[0].id + "','" + req.session.username + "')"

        db.query(av,(err,result)=>{
            res.json({result:"ok we will send the request for owner"})
        })
    })
    // console.log(req.session.username)
    // var sql11='select owner from animals where id=?'
    // var sql='update animals set owner=? where id=?'
    // var sql1='update adoption set status_id=? where id_animal=?'
    // db.query(sql11,[id],(err,result)=>{
    //     var not=""
    // })
    // db.query(sql,[req.session.username,id],(err,resultt)=>{
    //     if(err)console.log(err)
    //     db.query(sql1,[1,id],(err,result)=>{
    //         if(err)console.log(err)
    //         res.json({result})
    //     })
    // })
}
    
module.exports={
    add_to_adlist:add_to_adlist_id ,
    show_ad_animal : show_ad_animal,
    adopt_an:adopt_an 
}
