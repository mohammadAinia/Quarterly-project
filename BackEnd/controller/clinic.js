const models=require("../models")
const db=require("../dbb/db")
const bcryptjs=require("bcryptjs");
const { DATE }=require("sequelize");

function create_clinic(req,res){
if(req.session.adminstritor){
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
else {res.json({valid:false})}
}
function showd_c (req,res){
    id=req.params.id
    check_date()
    sql='select veterinarianns.user_id,user_infos.first_name,user_infos.last_name,veterinarianns.deatalis,veterinarianns.nation,veterinarianns.address from user_infos join veterinarianns on user_infos.id=veterinarianns.user_id where cl_id in (select id_c from clinics where id_c=?)'
    sqll='select * from clinics where id_c=?'
    db.query(sql,[id],(err,result)=>{
        if(err){console.log(err)}
        else {
            db.query(sqll,[id],(error,result1)=>{
                if(error){console.log(error)}
                else{
                    res.json({valid:true,result,result1})
                }
            })
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
    if(req.session.adminC){

    id=req.params.id
    sql='select * from clinics where admin_clinic =?'
    db.query(sql,[req.session.username],(error,result)=>{
        if(error){
            return res.json({valid:false})
        }
        else 
        {   
            var sql1='update veterinarianns set cl_id=? where user_id=?'
            db.query(sql1,[result[0].id_c,id],(error,result1)=>{ 
                if(error){console.log(error)}
                else return res.json({valid:true})
            })///////////////////////////////////////////////
    } 
    }
    )
}
else {res.json({valid:false})}
}
function add_doc_to_cli_new(req,res){
    //parameter
    if(req.session.adminC){

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
else {res.json({valid:false})}
}

function show_all_vet_without_clinic(req,res){
    if(req.session.adminC){

    sql='SELECT * FROM user_infos WHERE id IN (SELECT user_id from veterinarianns where cl_id=?)'
    db.query(sql,[0],(error,result)=>{
        if(error) console.log (error)
        else return res.json({result,valid:true})
    }
        
    )
}
else {res.json({valid:false})}
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
    if(req.session.adminstritor){

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
                                db.query(sql11,[req.session.username],(error,resulttt)=>{
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
    }
    else {res.json({valid:false})}
    };
function add_new_admin_for_clinic(req,res){
    if(req.session.adminstritor){

    q=req.body.First_name
    qq=req.body.Last_name
    qqq=req.body.Email
    qqqq=req.body.Phone
    qqqqq=req.body.Password
    qqqqqq=req.body.Age
    id=req.params.id
    bcryptjs.genSalt(10,(err,salt) => {
        bcryptjs.hash(qqqqq,salt,function (err,hash) {
            var sql= "insert into user_infos (email,password,phone,last_name,first_name,age,rolee) values ('" + qqq + "','" + hash + "','" + qqqq + "','" + qq + "','" + q + "','" + qqqqqq + "','"+'doc'+"')"
            db.query(sql,(error,result)=>{
                if(error){console.log(error)}
                else{
                    sqql='update clinics set admin_clinic=? where id_c=?'
                    db.query(sqql,[qqq,id],(error,result)=>{
                        if(error){console.log(error)}
                        else{
                            res.json({valid:true,result})
                        }
                    })                    
                }
            })
        })})
    }
    else {res.json({valid:false})}
    }
function show_all_under(req,res){
    if(req.session.username){

    sql='select * from user_infos where id in (select veterinarianns.user_id from veterinarianns join clinics on veterinarianns.cl_id=clinics.id_c where clinics.admin_clinic=?)'
    db.query(sql,[req.session.username],(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
            console.log("doneeee")
        }
    })
}
else {res.json({valid:false})}
}
function set_tozero(req,res){
    if(req.session.adminC){

    id=req.params.id
    var sql='update veterinarianns set cl_id=? where user_id=?'
    db.query(sql,[0,id],(error,result)=>{
        if(error){console.log(error)}
        else {
            res.json({valid:true})
        }
    })
}
else {res.json({valid:false})}
}
function show_shift_time(req,res){
    id=req.params.id
    sql='select * from work_time where vet_id=?'
    db.query(sql,[id],(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
        }
    })
}
function add_shift_time(req,res){
    if(req.session.adminC){

  sqll='select * from clinics where admin_clinic=?'
  db.query(sqll,[req.session.username],(error,result)=>{
    if(error){console.log(error)}
    else {
        id=req.params.id
        days=['S','Su','M','Tu','W','Th']
        days.forEach(d => {
            var sql= "insert into work_time (start,end,day,vet_id,clinic_id) values ('" + req.body.All_Day_From + "','" + req.body.All_Day_To + "','" + d + "','" + id + "','" + result[0].id_c + "')"
            db.query(sql,(error,result)=>{
                if(error){console.log(error)}
                
            })
        });
        res.json({valid:true})
    }
  })
}
else {res.json({valid:false})}
}
function add_shift_time_diff(req,res){
    if(req.session.adminC){

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
else {res.json({valid:false})}    
}
function update_time_shift(req,res){
    if(req.session.adminC){

    id=req.params.id
        days=['S','Su','M','Tu','W','Th']
        start=[req.body.Saturday_From,req.body.Sunday_From,req.body.Monday_From,req.body.Tuesday_From,req.body.Wednesday_From,req.body.Thursday_From]
        end=[req.body.Saturday_To,req.body.Sunday_To,req.body.Monday_To,req.body.Tuesday_To,req.body.Wednesday_To,req.body.Thursday_To]
            for (let index = 0; index < days.length; index++) {
                var sql='update work_time set start=? ,end=? where vet_id=? and day=?'
                db.query(sql,[start[index],end[index],id,days[index]],(error,result)=>{
                    if(error){console.log(error)}

                })
                
            }
            res.json({valid:true})

        }
        else {res.json({valid:false})}
        
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
function show_all_animal(req,res) {
    if(req.session.username){
    const sql=' SELECT * from animals   WHERE animals.owner=?'
    db.query(sql,[req.session.username], (err, result) => {
        if (err) return res.json(err)
       
        return res.json({result,valid:true}) 
    } 
    )
}
else 
return res.json({valid:false})
}
function show_av_time(req,res){
    var date=req.params.date
    id=req.params.id
    console.log(date)
    sql='select * from booking where vet_idb=? and datebooking=?'
    db.query(sql,[id,date],(error,result)=>{

        if(error){console.log(error)}
        else if (result.length==0){
        sql1='select * from work_time where vet_id=?'
        db.query(sql1,[id],(error,result1)=>{
            if(error){console.log(error)}
            else{
                console.log('dfsds')
                const av_time=[]
                var startTime=result1[0].start
                av_time.push(startTime)
                    while (isTime1LessThan(av_time[av_time.length-1],result1[0].end)) {
                        newTime = add30MinutesToTime(av_time[av_time.length-1]);
                        av_time.push(newTime)
                    }
                    res.json({av_time,valid:true})
            } 
        })        
        } 
        else {
            console.log('1234567')

            sql11='select * from work_time where vet_id=?'
            db.query(sql11,[id],(error,result2)=>{
                if(error){console.log(error)}
                else{
                    var av_time=[]
                var startTime=result2[0].start
                av_time.push(startTime)
                    while (isTime1LessThan(av_time[av_time.length-1],result2[0].end)) {
                                var newTime = add30MinutesToTime(av_time[av_time.length-1]);
                                    av_time.push(newTime)
                    }
                    for (let index = 0; index < result.length; index++) {
                        for (let ii = 0; ii < av_time.length; ii++) {
                            if(checkIfTimesAreEqual(result[index].timebookig,av_time[ii])==true){
                                av_time= av_time.filter((e)=> e!=av_time[ii])
                                console.log('vfslknkjsfgkjs')
                            }
                        }
                    }
                    res.json({av_time,valid:true})
                }
            })
        }
    })
}
function make_appointment(req,res){
    if(req.session.username){

    let animal=req.body.Sick_animal
    let Type_Service=req.body.Type_Service
    let Day_of_booking=req.body.Day_of_booking
    let selectedPet=req.body.Time
    let hh=req.params.id
    var sqll='select cl_id from veterinarianns where user_id=?'
    db.query(sqll,[hh],(error,result1)=>{
        if(error){console.log(error)}
        else{
            var sql="INSERT booking (datebooking,timebookig,vet_idb,clinic_idb,owner_idb,animal_idb,service) VALUES('" + Day_of_booking + "','" + selectedPet + "','" + hh + "','" + result1[0].cl_id + "','" + req.session.username + "','" + animal + "','" + Type_Service + "')"
            db.query(sql,(error,result)=>{
                if(error){console.log(error)}
                else{
                    res.json({valid:true,result})
                    
                }
            })
        }
    })
}
else {res.json({valid:false})}
}
function add_info_to_clinic(req,res){
    if(req.session.adminC){

    q=req.body.One
    qq=req.body.Two  
    qqq=req.body.Three
    var sql='update clinics set special=?,spe1=?,spe2=? where admin_clinic=?'
    db.query(sql,[q,qq,qqq,req.session.admin],(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
    
        }
    })
}
else {res.json({valid:false})}
}
function show_info_clinic(req,res){
    sql='select * from clinics where admin_clinic=?'
    db.query(sql,[req.session.admin],(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
        }
    })
} 
function show_next_appointment(req,res){
    sql='select booking.service,clinics.c_name,c_name,user_infos.first_name,animals.name,booking.datebooking,booking.timebookig FROM booking join clinics on clinics.id_c=booking.clinic_idb join user_infos on user_infos.id=booking.vet_idb join animals on booking.animal_idb=animals.id where booking.owner_idb=?'
    db.query(sql,[req.session.username],(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
        }
    })
}
function add_new_clinic(req,res){
    if(req.session.adminstritor){
    namee=req.body.Name_clinic
    timeo=req.body.From
    timec=req.body.To
    loc=req.body.Location
    detloc=req.body.Location_details
    phone=req.body.Phone
    var sql="INSERT clinics(c_name,time_open,time_close,location,det_loc,phone) VALUES('" + namee + "','" + timeo + "','" + timec + "','" + loc + "','" + detloc + "','" + phone + "')"
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
        }
    }) 
}
else  res.json({valid:false})

}

function get_time(req,res){
    sql='select * from clinics where admin_clinic=?'
    db.query(sql,[req.session.admin],(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
        }
    })
}
function show_appointment_vet(req,res){
    if(req.session.username){

    sqll='select * from user_infos where email=?'
    db.query(sqll,[req.session.username],(error,result)=>{
        if(error){console.log(error)}
        else{
            sql='select booking.check_,booking.id_b,booking.service,clinics.c_name,c_name,user_infos.first_name,animals.name,animals.id,booking.datebooking,booking.timebookig FROM booking join clinics on clinics.id_c=booking.clinic_idb join user_infos on user_infos.id=booking.vet_idb join animals on booking.animal_idb=animals.id where booking.vet_idb=?'
            db.query(sql,[result[0].id],(error,result)=>{
                if(error){console.log(error)}
                else{
                    res.json({valid:true,result})
                
                }
            }) 
        }
    })  
} 
else {res.json({valid:false})}
} 
function add_de (req,res){
    if(req.session.username){

    id=req.params.id
    ii=req.params.ii
    var sql="INSERT medical_report (vet,reportt,rep_animal_id ,b_id_v) VALUES('" + req.session.username + "','" + req.body.Report + "','" + ii + "','" + id + "')"
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        else{
            sql='update booking set check_=? where id_b=?'
            db.query(sql,[1,id],(error,result)=>{
                if(error){console.log(error)}
                else{
                    res.json({valid:true,result})
                     
                }  
            })  
        } 
    })
}
else {res.json({valid:false})}
} 
function remov_doc(req,res){
    id=req.params.id
    sql='update veterinarianns set cl_id=? where user_id=?'
    db.query(sql,[0,id],(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
            
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
    show_vet_with_time,
    show_all_animal,
    show_av_time,
    make_appointment,
    add_info_to_clinic,
    show_info_clinic,
    show_next_appointment,
    add_new_clinic,
    show_shift_time
    ,update_time_shift,
    add_new_admin_for_clinic,
    get_time,
    show_appointment_vet,
    add_de,
    remov_doc 
}
function add30MinutesToTime(time) {
    const [hour, minute] = time.split(':').map(Number);

    let newHour = hour;
    let newMinute = minute + 30;

    if (newMinute >= 60) {
        newHour = (newHour + Math.floor(newMinute / 60)) % 24;
        newMinute = newMinute % 60;
    }

    return `${String(newHour).padStart(2, '0')}:${String(newMinute).padStart(2, '0')}`;
}
////////////////////////////////////////////////////////////////////////////
function isTime1LessThan(time1, time2) {
    const [h1, m1] = time1.split(':').map(Number);
    const [h2, m2] = time2.split(':').map(Number);

    if (h1 < h2 || (h1 === h2 && m1 < m2)) {
        return true;
    } else {
        return false;
    }
}
/////////////////////////////////////////
function checkIfTimesAreEqual(time1, time2) {
    const [hours1, minutes1] = time1.split(':').map(Number);
    const [hours2, minutes2] = time2.split(':').map(Number);

    return hours1 === hours2 && minutes1 === minutes2;
}
function check_date(){
    sql='delete from booking where datebooking < CURRENT_DATE() '
   
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        else {console.log('doneeeeeeeeee')}
    })
}





// Test the function


// function isTime1GreaterThan(time1, time2) {
//     const [h1, m1] = time1.split(':').map(Number);
//     const [h2, m2] = time2.split(':').map(Number);

//     if (h1 > h2 || (h1 === h2 && m1 > m2)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// av_time.push(time)
//                 while (isTime1GreaterThan(time,av_time[av_time.length-1])==true) {
//                 const date = new Date(`2022-01-01T${time}:00`);
//                 const minutesToAdd = 30;
//                 const nDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes() + minutesToAdd);
//                 const formattedTime = nDate.toLocaleDateString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
//                 console.log(formattedTime);
//                 av_time.push(formattedTime)
//                 }  
//                 // const time1 = "12:30";
//                 // const time2 = "10:45";
//                 // const result = isTime1GreaterThan(time1, time2);
//                 // console.log(result); // This will output true
// // Test the function
///////////////////////////////////////////////////////////////////////
// console.log(time)
// const date =new Date(` ${time}`)
// date.setMinutes(date.getMinutes()+30)
// const nDate=date.toLocaleDateString('en-US',{hour:'2-digit',minute:'2-digit'});
// console.log(nDate)
///////////////////////////////////////////////////////////////////////
// result.forEach((el,index,are)=>{
//     console.log(el.id)
//     console.log(index)
//     console.log(are)
// });










