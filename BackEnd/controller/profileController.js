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
    pass= req.body.password
    sql='select password from user_infos where email=?'
    db.query(sql,[req.session.username],(err,result)=>{
        bcryptjs.compare(
            req.body.password,
            result[0].password,
            function (err,result) {
                if (result) {
                    return res.json({result,valid:true});
                } else {
                    return res.json({
                        valid:false
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
    var ps=req.body.password
        bcryptjs.genSalt(10,(err,salt) => {
        bcryptjs.hash(req.body.password,salt,function (err,hash) {
            var password=hash
            sql='update user_infos set first_name=?,last_name=?,phone=?,age=?,password=? where email=?'
            db.query(sql,[fn,ln,phone,age,password,req.session.username],(error,result)=>{
                if(error)console.log(error)
                res.json({result,valid:true})
            })
        });
        });
    
}

module.exports={show_pofile:show_pofile,check_password:check_password,edit_info:edit_info}