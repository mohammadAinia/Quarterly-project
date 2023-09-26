const { json }=require("body-parser");
const models=require("../models");
const bcryptjs=require("bcryptjs");
const db=require("../dbb/db")

const singup_vet=(req,res) => {
    models.user_info.findOne({ where: { email: req.body.Email } }).then((result) => {
            if (result) {
                res.json({
                    message: "email alrady exist ",
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
                            rolee: "doc",
                            age: req.body.Age,
                            gender: req.body.Gender,
                        };
                        models.user_info.create(user).then((result) => {
                                // res.status(200).json(result)
                                const veterinarians={
                                    user_id: result.id,
                                    address: req.body.Addres,
                                    bsc: req.body.Bachelor,
                                    university: req.body.University,
                                    exp: req.body.exp,
                                    num_year_exp: req.body.num_year_exp,
                                    deatalis: req.body.Previous_work,
                                    url_bsc: req.file.bsc,
                                    url_prev_imag: req.file.prev,
                                };
                                models.veterinariann.create(veterinarians).then((result) => {
                                        req.session.username=user.email;
                                        return res.json({
                                            Login: true,
                                            username: req.session.username,
                                        });
                                    })
                                    .catch((error) => {
                                        return res.json({
                                            valid: false,
                                        });
                                    });
                            })
                            .catch((error) => {
                                res.status(500).json({
                                    message: "somthing wrong1111"+error,
                                });
                            });
                    });
                });
            }
        })
        .catch((error) => {
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
            if (user==null) {
                return res.json({
                    message: "this email is not exist",
                });
            } else if (user.rolee=="DOC") {
                bcryptjs.compare(
                    req.body.password,
                    user.password,
                    function (err,result) {
                        if (result) {
                            req.session.username=req.body.email;
                            console.log(user.first_name);
                            // console.log(req.session.username)
                            return res.json({ Login: true,username: req.session.username });
                        } else {
                            return res.json({
                                message: "incorrect password",
                            });
                        }
                    }
                );
            } else if ((user.rolee="user")) {
                bcryptjs.compare(
                    req.body.password,
                    user.password,
                    function (err,result) {
                        if (result) {
                            req.session.username=user.email;
                            console.log(user.first_name);
                            return res.json({ Login: true,username: req.session.username });
                        } else {
                            return res.status(401).json({
                                message: "incorrect password",
                            });
                        }
                    }
                );
            } else return res.json({ Login: false });
        })
        .catch((error) => {
            return res.json({
                message: "somthing wrong"+error,
            });
        });
}

function logout(req,res) {
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

const home_owner=(req,res) => {
    if (req.session.username) {
        models.user_info.findOne({ where: { email: req.session.username } }).then((resp) => {

            sql='select * from animals where owner=?'
            db.query(sql,[req.session.username],(err, result) => {
                if (err) return res.json(err)
                else {
                var sqll='select * from problims LIMIT 3'
                db.query(sqll,(err, resultt) =>{

                    if (err)return res.json(err)
                    else
                    return res.json({valid:true,username:resp.first_name,result,resultt}) + console.log()+notifcation(req.session.username)
                })
                }
                // return res.json({valid:true,username:resp.first_name,result}) + console.log()
            })
                // models.animal.findAll({ where: { owner: req.session.username }, attributes:['name','urlImage']}).then((result) => {
                
                //     var ress=[result]
                //     console.log(ress)
                //     return console.log(req.session.username+" sess") +res.json({valid:true,username:resp.first_name,result:ress})
                //     })
                //     .catch((err) => {
                //         return res.json({ valid: false });
                //     });
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
var sql='select * from animals join health_records on animals.id=health_records.animal_id join vacciens on vacciens.animal_id=animals.id join vaccien_informations on vaccien_informations.id=vacciens.vacc_info_id where animals.owner=?'
var sqll='select animals.type,vacciens.next_appointment,animals.name,animals.age,vaccien_informations.name_vacc from animals join health_records on animals.id=health_records.animal_id join vacciens on vacciens.animal_id=animals.id join vaccien_informations on vaccien_informations.id=vacciens.vacc_info_id where animals.owner=?'
var sqlll='select *from tip'
db.query(sqll,[owner],(err, result) => {
    if(err)console.log(err)
    db.query(sqlll,(err, result2) => {
        if (err) console.log(err+"in notification")

    result.map((u,i)=>{//here we sshow th num of day for evre vacc rim
        
            var dad=new Date(u.next_appointment)
            var d=new Date()
            var datee = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
            var ddss= new Date(datee)
            var Difference_In_Time = dad.getTime() - ddss.getTime();
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            return console.log("the days rimining for next vacc    "+ Difference_In_Days+"  day/s  "+"for the animal name is  "+u.name)
    })
     result.map((u,i)=>{//here we sshow th num of day for evre vacc rim
        var dad=new Date(u.age)
        var d=new Date()
        var datee = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        var ddss= new Date(datee)
        var Difference_In_Time = ddss.getTime() - dad.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        var mon=Difference_In_Days/30
        var mm=parseInt(mon)
                result2.map((uu,ii)=>{
                    if (mm>uu.min_age&&mm<uu.max_age)
                    {
                    console.log("the tip for you is "+"   "+uu.tip +"   for   "+u.name)
                    }
                })
})
result.map((u,i)=>{//here we sshow th num of day for evre vacc rim
    var dad=new Date(u.age)
    var d=new Date()
    var datee = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    var ddss= new Date(datee)
    var Difference_In_Time = ddss.getTime() - dad.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    var mon=Difference_In_Days/30
    var mm=parseInt(mon)
            result2.map((uu,ii)=>{
                if (mm>uu.min_age&&mm<uu.max_age&&u.type==uu.animal_type)
                {
                console.log("the tip for you is "+"   "+uu.tip +"   for   "+u.name)
                }
            })
})
result.map((u,i)=>{//here we sshow th num of day for evre vacc rim
    var dad=new Date(u.age)
    var d=new Date()
    var datee = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    var ddss= new Date(datee)
    var Difference_In_Time = ddss.getTime() - dad.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    var mon=Difference_In_Days/30
    var mm=parseInt(mon)
            result2.map((uu,ii)=>{
                if (mm>uu.min_age&&mm<uu.max_age&&uu.category=="food")
                {
                console.log("the tip in food for you is "+"   "+uu.tip +"   for   "+u.name)
                }
            })
})
}
    )
}
)
}
module.exports={
    singup_user: singup_user,
    login: login,
    show_users: show_users,
    logout: logout,
    singup_vet: singup_vet,
    home_owner: home_owner,
};



//            var date = dad.getFullYear()+'-'+(dad.getMonth()+1)+'-'+dad.getDate();
// var ddd= new Date(date)