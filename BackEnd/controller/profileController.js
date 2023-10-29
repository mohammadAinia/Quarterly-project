const models=require("../models")
const db=require("../dbb/db")
const bcryptjs=require("bcryptjs");
function show_pofile(req,res){
    console.log(req.session.username)
    if(req.session.username){
        sql='select * from user_infos where email=?'
    db.query(sql,[req.session.username],(error,result)=>{
        console.log(result)
        res.json({result,valid:true})
    })
    }
    else 
    res.json({valid:false})
}
function check_password (req,res){
    pass= req.body.Password
    sql='select * from user_infos where email=?'
    db.query(sql,[req.session.username],(err,result)=>{
        console.log(result[0].password)
        console.log(pass)
        console.log(req.session.username)
            bcryptjs.compare(
            pass,
            result[0].password,
            function (err,resultt) {
                if (resultt) {
                    console.log("jsdf")
                    return res.json({result,valid:true});
                } else {
                    console.log("sljgsjg")
                    return res.json({valid:false
                    });
                }
            }
        );
    })
}
function edit_info(req,res){
    var fn =req.body.First_name
    var ln=req.body.Last_name
    var phone=req.body.Phone
    var age=req.body.Age
    sql='update user_infos set first_name=?,last_name=?,phone=?,age=? where email=?'
    db.query(sql,[fn,ln,phone,age,req.session.username],(error,result)=>{
        if(error)console.log(error)
        res.json({result,valid:true})
    })

    // var ps=req.body.Password
        // bcryptjs.genSalt(10,(err,salt) => {
        // bcryptjs.hash(req.body.password,salt,function (err,hash) {
        //     var password=hash
        //     bcryptjs.hash(ps,salt,function (err,hash) {
                
        //     })
        
        // });
        // });
    
}

module.exports={show_pofile:show_pofile,check_password:check_password,edit_info:edit_info}