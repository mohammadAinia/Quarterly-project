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
    sql='select veterinarianns.user_id,user_infos.first_name,user_infos.last_name,veterinarianns.deatalis,veterinarianns.nation,veterinarianns.address from user_infos join veterinarianns on user_infos.id=veterinarianns.user_id where cl_id in (select id_c from clinics where id_c=?)'
    db.query(sql,[id],(err,result)=>{
        if(err){console.log(err)}
        else {
            return res.json({result,valid:true})
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
        {   
            var sql1='update veterinarianns set cl_id=? where user_id=?'
            db.query(sql1,[result[0].id_c,id],(error,result1)=>{ 
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

    sql='select * from user_infos where id in (select veterinarianns.user_id from veterinarianns join clinics on veterinarianns.cl_id=clinics.id_c where clinics.admin_clinic=?)'
    db.query(sql,[req.session.admin],(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
            console.log("doneeee")
        }
    })
}
function set_tozero(req,res){

    id=req.params.id
    var sql='update veterinarianns set cl_id=? where user_id=?'
    db.query(sql,[0,id],(error,result)=>{
        if(error){console.log(error)}
        else {
            res.json({valid:true})
        }
    })
}
function add_shift_time(req,res){
  sqll='select * from clinics where admin_clinic=?'
  db.query(sqll,[req.session.admin],(error,result)=>{
    if(error){console.log(error)}
    else {
        id=req.params.id
        days=['S','Su','M','Tu','W','Th']
        days.forEach(d => {
            var sql= "insert into work_time (start,end,day,vet_id,clinic_id) values ('" + req.body.All_Day_From + "','" + req.body.All_Day_To + "','" + "null" + "','" + id + "','" + result[0].id_c + "')"
            db.query(sql,(error,result)=>{
                if(error){console.log(error)}
                
            })
        });
        res.json({valid:true})
    }
  })
}
function add_shift_time_diff(req,res){
    sqll='select * from clinics where admin_clinic=?'
    db.query(sqll,[req.session.admin],(error,result)=>{
    if(error){console.log(error)}
    else {
        id=req.params.id
        days=['S','Su','M','Tu','W','Th']
        start=[req.body.Saturday_From,req.body.Sunday_From,req.body.Monday_From,req.body.Tuesday_From,req.body.Wednesday_From,req.body.Thursday_From]
        end=[req.body.Saturday_To,req.body.Sunday_To,req.body.Monday_To,req.body.Tuesday_To,req.body.Wednesday_To,req.body.Thursday_To]
            for (let index = 0; index < days.length; index++) {
                var sql= "insert into work_time (start,end,day,vet_id,clinic_id) values ('" + start[index] + "','" + end[index] + "','" + days[index] + "','" + id + "','" + result[0].id_c + "')"
                db.query(sql,(error,result)=>{
                    if(error){console.log(error)}
                    
                })
                
            }
        
        
        res.json({valid:true})
        }
    })
    }
function show_vet_without_time (req,res){

    sql='select *  from user_infos where id in (select user_id from veterinarianns where cl_id=(select id_c from clinics where admin_clinic=?) and  user_id not in (select vet_id from work_time))'
    db.query(sql,[req.session.admin],(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
            console.log("doneeee")
        }
    })
}
function show_vet_with_time (req,res){

    sql='select *  from user_infos where id in (select user_id from veterinarianns where cl_id=(select id_c from clinics where admin_clinic=?) and  user_id  in (select vet_id from work_time))'
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
    show_all_under,
    set_tozero,
    add_shift_time,
    show_vet_without_time,
    add_shift_time_diff,
    show_vet_with_time
}

























// result.forEach((el,index,are)=>{
//     console.log(el.id)
//     console.log(index)
//     console.log(are)
// });










