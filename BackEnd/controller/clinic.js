const models=require("../models")
const db=require("../dbb/db")
const bcryptjs=require("bcryptjs");

function create_clinic(req,res){
namee=req.body.name
place=req.body.place
number=req.body.number
openq=req.body.openq
closeq=req.body.closeq
    var sql="INSERT clinics (c_name,c_place,c_number,time_open,time_close) VALUES('" + namee + "','" + place + "','" + number + "','" + openq + "','" + closeq + "')"
    db.query(sql,(err,result)=>{
        if(err){console.log(err)}
        else {
            return res.json(result)
        }
    })
}
function showd_c (req,res){
    id=req.params.id
    sql='select * from clinics where c_id=?'
    db.query(sql,[id],(err,result)=>{
        if(err){console.log(err)}
        else {
            return res.json(result)
        }

    })
}
function show_all (req,res){
    if (req.session.username){
    sql='select * from clinics '
    db.query(sql,(err,result)=>{
        if(err){console.log(err)}
        else {
            return res.json({result,valid:true})
        }

    })
}
else res.json({valid:false})
}

function search_clinc (req,res){
    if(req.session.username){
    var name=req.params.name
    sql='select * from clinics where c_name=?'
    db.query(sql,[name],(err,result)=>{
        if(err) console.log(err)
        console.log(result)
        return res.json({valid:true,result})
    })
    
}
else return res.json({valid:false})
}
function add_doc_to_cli(req,res){// here is test  قبل فكرة انو الطبيب مايكنلو حساب بلا العيادة
    id=req.params.id
    sql='select * from clinics where admin_clinic =?'
    db.query(sql,[req.session.admin],(error,result)=>{
        if(error){
            return res.json({valid:false})
        }
        else 
        {var sql1='update veterinarianns set cl_id=? where id=?'
            db.query(sql1,[id,result[0].id_c],(error,result1)=>{
                if(error){console.log(error)}
                else return res.json({valid:true})
            })
    }
    }
    )
}
function add_doc_to_cli_new(req,res){
    //parameter
    bcryptjs.genSalt(10,(err,salt) => {
    bcryptjs.hash(req.body.password,salt,function (err,hash) {
        id_admin=res.session.clinc_admin
    sql='select id_c from clinc where admin_clinc=?'
    db.query(sql,[id_admin],(error,result)=>{
        if(error){console.log(error+"  add_doc_to_cli_new")}
        else {
            var sql2="INSERT user_infos (email,password,phone,rolee,first_name,last_name,age,gender) VALUES('" + email + "','" + hash + "','" + phone + "','" + "doc" + "','" + first + "','" + last + "','" + age + "','" + gender + "')"
            db.query(sql2,(error,result)=>{
                if(error){console.log(error+"ff")}
                else {
                    var sql1="INSERT veterinarianns (address,nation,university,num_year_exp,deatalis,url_bsc,cl_id) VALUES('" + adre + "','" + nation + "','" + uni + "','" + numy + "','" + det + "','" + bsc + "','" + result[0].id_c + "')"
                    db.query(sql1,(error,result)=>{
                        if(error){console.log(error+"ff")}
                        else {
                            res.json({valid:true})
                        }
                    })
                }
            })
            
        }
    })
    });
});
}

function show_all_vet_without_clinic(req,res){
    sql='SELECT * FROM user_infos WHERE id IN (SELECT user_id from veterinarianns where cl_id=?)'
    db.query(sql,[0],(error,result)=>{
        if(error) console.log (error)
        else return res.json({result,valid:true})
    }
        
    )
}
function update_time (req,res){
    var sql='update clinics set time_open=?,time_close=?'

}
function make_appointment(req,res){
    //parameter
    var sql="INSERT aapointmint (a_clinic_id,a_vet_id,date_ap,animal_id_ap,time_ap) VALUES('" + namee + "','" + place + "','" + number + "','" + openq + "','" + closeq + "')"
    db.query(sql,(error,result)=>{})
}
function show_avilable_app(req,res){
    
}  

const singup_vet_from_admin=(req,res) => {
    models.user_info.findOne({ where: { email:req.body.email} }).then((result) => {
            if (result) {
                res.json({
                    message: "email alrady exist ",
                });
            } else { 
                bcryptjs.genSalt(10,(err,salt) => {
                    bcryptjs.hash(req.body.password,salt,function (err,hash) {
                        const user={
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.email,
                            phone: req.body.phone,
                            password: hash,
                            rolee: "doc",
                            age: req.body.age,
                            gender: req.body.gender,
                        };
                        models.user_info.create(user).then((result) => {
                                    user_id= result.id
                                    address= req.body.address
                                    bsc= req.body.Nationality
                                    university= req.body.university
                                     deatalis= req.body.previous_work
                                    url_bsc= req.file.filename
                                sql11='select id_c from clinics where admin_clinic=?'
                                db.query(sql11,[req.session.admin],(error,resulttt)=>{
                                    if(error){console.log(error)}
                                    else {
                                        var sql= "insert into veterinarianns (user_id,address,nation,university,deatalis,url_bsc,cl_id) values ('" + user_id + "','" + address + "','" + bsc + "','" + university + "','" + deatalis + "','" + url_bsc + "','" + resulttt[0].id_c + "')"
                                        db.query(sql,(error,resss)=>{
                                            if(error){console.log(error)}
                                            else{
                                                return res.json({
                                                                valid:true,
                                                            });
                                            }
                                        })
                                    }
                                })
                            })
                            .catch((error) => {
                                console.log(error+"fsdfs")
                                res.status(500).json({
                                    message: "somthing wrong1111"+error,
                                });
                            });
                    });
                });
            }
        })
        .catch((error) => {
            console.log(error+"sfsdf")
            res.status(500).json({
                message: "somthing wrong 500"+error,
            });
        });
};
function show_all_under(req,res){
    sql='select * from veterinarianns where cl_id in (select id_c from clinics where admin_clinic=?)'
    db.query(sql,[req.session.admin],(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
            console.log("doneeee")
        }
    })
}
module.exports={
    create_clinic,
    showd_c,
    show_all,
    search_clinc,
    add_doc_to_cli,
    show_avilable_app,
    update_time,
    show_all_vet_without_clinic,
    add_doc_to_cli_new,
    singup_vet_from_admin,
    show_all_under
}

























// result.forEach((el,index,are)=>{
//     console.log(el.id)
//     console.log(index)
//     console.log(are)
// });










