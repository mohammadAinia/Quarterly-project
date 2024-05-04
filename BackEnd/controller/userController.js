const { json }=require("body-parser");
const models=require("../models");
const bcryptjs=require("bcryptjs");
const db=require("../dbb/db")
//
const singup_vet=(req,res) => {
    models.user_info.findOne({ where: { email: req.body.email } }).then((result) => {
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
                                // res.status(200).json(result)
                                
                                    user_id= result.id
                                    address= req.body.address
                                    bsc= req.body.Nationality
                                    university= req.body.university
                                    // exp: req.body.exp,
                                    // num_year_exp: req.body.num_year_exp,
                                     deatalis= req.body.previous_work
                                    url_bsc= req.file.filename
                                
                                var sql= "insert into veterinarianns (user_id,address,nation,university,deatalis,url_bsc) values ('" + user_id + "','" + address + "','" + bsc + "','" + university + "','" + deatalis + "','" + url_bsc + "')"
                                db.query(sql,(error,resss)=>{
                                    if(error){console.log(error)}
                                    else{
                                        return res.json({
                                                        valid:true,
                                                        Login: true,
                                                        username: req.session.username,

                                                    });
                                    }
                                })
                                // models.veterinariann.create(veterinarians).then((result) => {
                                //         req.session.username=user.email;
                                //         return res.json({
                                //             valid:true,
                                //             Login: true,
                                //             username: req.session.username,
                                //         });
                                //     })
                                //     .catch((error) => {
                                //         return res.json({
                                //             valid: false,
                                //         });
                                //     });
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
const singup_user=(req,res) => {
    models.user_info.findOne({ where: {email:req.body.Email} }).then((result) => {
            if (result) {
                return res.json({
                    message: "email user alrady exist ",
                });
            } else {
                bcryptjs.genSalt(10,(err,salt) => {
                    bcryptjs.hash(req.body.Password,salt,function (err,hash) {
                        const user={
                            first_name: req.body.First_name,
                            last_name: req.body.Last_name,
                            email: req.body.Email,
                            phone: req.body.Phone,
                            password: hash,
                            rolee: "user",
                            age: req.body.Age,
                            gender: req.body.Gender,
                        };
                        models.user_info.create(user).then((result) => {
                                req.session.username=user.email;
                                req.session.namee=user.first_name+" "+user.last_name
                                return res.json({
                                    Login: true,
                                    username: req.session.username,
                                });
                            })
                            .catch((error) => {
                                console.log(err+"after add")
                                return res.json({
                                    valid: false,
                                });
                            });
                    });
                });
            }
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "somthing wrong",
            });
        });
};
function login(req,res) {
    models.user_info.findOne({ where: { email: req.body.email } })
        .then((user) => {
            // a.push(user.first_name)
            if (user==null) {
                return res.json({
                    message: "this email is not exist",
                });
            } else if (user.rolee=="doc") {
                bcryptjs.compare(
                    req.body.password,
                    user.password,
                    function (err,result) {
                        if (result) {
                            req.session.roleee='doc'
                            req.session.username=req.body.email;
                            req.session.namee=user.first_name+" "+user.last_name

                            
                            return res.json({ Login: true, username: req.session.username ,roleee:true,adminstritor:false});
                        } else {
                            return res.json({
                                message: "incorrect password",
                            });
                        }
                    }
                );
            } 

            else if(user.rolee=="admin"){
                console.log("admin")
                bcryptjs.compare(req.body.password,user.password,function (err,result) {
                    if (result) {
                        req.session.username=user.email;
                        req.session.admin=user.email;
                        req.session.adminstritor=user.email
                        req.session.namee=user.first_name+" "+user.last_name
                        return res.json({ Login: true,username: req.session.username ,roleee:false,adminstritor:true});

                    } else {
                        return res.status(401).json({
                            message: "incorrect password",
                        });
                    }
                }
            );
            }                
            else if ((user.rolee=="user")) {
                bcryptjs.compare(req.body.password,user.password,function (err,result) {
                        if (result) {
                            sql='select * from animals where owner=?'
                            db.query(sql,[user.email],(err,resu)=>{
                                if (err)console.log(err)
                                // console.log(resu)
                                tips(resu)
                            })
                            notifcation(user.email)
                            // req.session.roleee='user'
                            req.session.username=user.email;
                            req.session.admin=user.email;
                            req.session.namee=user.first_name+" "+user.last_name

                            return res.json({ Login: true,username: req.session.username ,roleee:false,adminstritor:false});

                        } else {
                            return res.status(401).json({
                                message: "incorrect password",
                            });
                        }
                    }
                );
            }   
            else return res.json({ Login: false });
        })
        .catch((error) => {
            return res.json({
                message: "somthing wrong"+error,
            });
        });
}

function logout(req,res) {
    req.session.destroy()    
    res.status(200).json({ message: "ok is done" });
    //redirect to the home page here
}

function show_users(req,res) {
    models.user_info
        .findAll()
        .then((data) => {
            res.status(200).json({ data });
        })
        .catch((err) => res.status(404).json({ err }));
}
//
const home_owner=(req,res) => {
    check_if_dosnot()
    if (req.session.username&&!req.session.roleee) {
        models.user_info.findOne({ where: { email: req.session.username } }).then((resp) => {

            sql='select * from animals where owner=?'
            db.query(sql,[req.session.username],(err, result) => {
                if (err) return res.json(err)
                else {
                var sqll='select * from problims LIMIT 4'
                db.query(sqll,(err, resultt) =>{
                    
                    if (err)return res.json(err)
                    else{
                        sql='select* from tip_gen limit 4'
                        db.query(sql,(err,resulttt)=>{
                            if (err) console.log(err)
                            else{
                                return res.json({valid:true,username:resp.first_name,result,resultt,resulttt,resultttt:"you have new notifications"}) 
                        }
                        })
                }})
                }
            })
            }
            )
            .catch((err) => {
                return res.json({ valid: false });
            });
    } else {
        return res.json({ valid: false });
    }
};
const notifcation =(owner)=>{
// var sql='select * from animals join health_records on animals.id=health_records.animal_id join vacciens on vacciens.animal_id=animals.id join vaccien_informations on vaccien_informations.id=vacciens.vacc_info_id where animals.owner=?'
var sqll='select vacciens.id_v_r,animals.type,vacciens.next_appointment,animals.name,animals.age,vaccien_informations.name_vacc,animals.id from animals join health_records on animals.id=health_records.animal_id join vacciens on vacciens.animal_id=animals.id join vaccien_informations on vaccien_informations.id=vacciens.vacc_info_id where animals.owner=?'
var sqlll='select * from notifications where animal_id=? AND special=?'

db.query(sqll,[owner],(err, result) => {
    if(err)console.log(err)
    result.map((u,i)=>{//here we sshow th num of day for evre vacc rim
            var dad=new Date(u.next_appointment)
            var d=new Date()
            var datee = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
            var ddss= new Date(datee)
            var Difference_In_Time = dad.getTime() - ddss.getTime();
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            if(Difference_In_Days<7){
            var not="The remaining days for next vacc for animal"+  u.name +" "+Difference_In_Days +"day/s"
            console.log(not) 
            db.query(sqlll,[u.id,u.id_v_r],(err,resu)=>{
                if (err) console.log(err)
                else if (resu.length==0) {
                    var tt="Vaccien"
                    var tostring=u.id_v_r
                    var sql1= "INSERT notifications (title,details,email,animal_id,special) VALUES('" + tt + "','" + not + "','" + owner + "','" + u.id + "','" + tostring + "')"              
                    db.query(sql1,(err,resus)=>{
                        if(err)console.log(err)
                    })
                }
            })
        }
        })
    result.map((u,i)=>{//here we sshow th num of day for evre vacc rim
        var agee=new Date(u.age)
        var days= daysUntilBirthday(agee)
        if(days<7){
        var birthDate= "left for birth for  " +u.name+"   is   "+days+"   day/s"
        var birthDatee="birthDate"
        db.query(sqlll,[u.id,birthDatee],(err,resuq)=>{
            if (err) console.log(err)
            else if (resuq.length==0) {
                var tt="birthDate"
                var sql1= "INSERT notifications (title,details,email,animal_id,special) VALUES('" + tt + "','" + birthDate + "','" + owner + "','" + u.id + "','" + birthDatee + "')"              
                db.query(sql1,(err,resus)=>{
                    if(err)console.log(err)
                })
            }
        })
    }
    })
}
)
}
function daysUntilBirthday(dateOfBirth) {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), dateOfBirth.getMonth(), dateOfBirth.getDate());

    if (birthday < today) {
    birthday.setFullYear(today.getFullYear() + 1);
    }
    const oneDay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.ceil((birthday - today) / oneDay);
    return daysLeft;
  }
const tips =(animal)=>{
 var sqll='delete from tip_gen' 
 db.query(sqll,(err,result)=>{
    animal.map((u,i)=>{//here we sshow th num of day for evre vacc rim
        var sql='select * from tip where animal_type=?'
        console.log(u.type)
        var dad=new Date(u.age)
        var d=new Date()
        var datee = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        var ddss= new Date(datee)
        var Difference_In_Time = ddss.getTime() - dad.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        var mon=Difference_In_Days/30
        var mm=parseInt(mon)
        db.query(sql,[u.type],(err,result)=>{
            if (err) console.log(err)
            result.map((uu,i)=>{
                if (uu.animal_type==u.type&&mm>=uu.min_age&&mm<=uu.max_age){
                    console.log(uu.tip)
                    var f="the tip for day is " + uu.tip +"  " + u.name ///
                    var sql= "INSERT tip_gen (gen_tip) VALUES('" + f + "')"
                    db.query(sql,(err,result)=>{
                        if(err)console.log(err)
                        return true 
                    })
                }
        })
    }
        )
        
        
})
})
}
function check_if_dosnot(){
    sql='select * from clinics where admin_clinic=?'
    db.query(sql,["N"],(error,result)=>{
        if(error){console.log(error)}
        else if (result.length!=0){
            sql='delete from clinics where id_c=?'
            db.query(sql,[result[0].id_c],(error,result)=>{
                if(error){console.log(error)}
                
            })
        }
    })
}
module.exports={
    singup_user: singup_user,
    login: login,
    show_users: show_users,
    logout: logout,
    singup_vet: singup_vet,
    home_owner: home_owner,

};
