const models=require("../models")
const db=require("../dbb/db")
function home_vat(req,res){
    if (req.session.username) {
        models.user_info.findOne({ where: { email: req.session.username } }).then((resp) => {
            sql='select * from animals join follow_t on follow_t.animal_id_f=animals.id where follow_t.vet=?'
            db.query(sql,[req.session.username],(err, result) => {
                if (err) return res.json(err)
                else {
                var sqll='select * from problims LIMIT 3'
                db.query(sqll,(err, resultt) =>{
                    
                    if (err)return res.json(err)
                    else{
                        sql='select* from event_gen limit 4'
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
}
function all_an(req,res){
    if(req.session.username&&req.session.roleee){
    sql='select * from animals join follow_t on follow_t.animal_id_f=animals.id join health_records on animals.id=health_records.animal_id where follow_t.vet=?'
    db.query(sql,[req.session.username],(error,result)=>{
        if (error){console.log(error)}
        else {
            return res.json({valid:true,result})
        }
    })
}
else {return res.json({valid:false})}
}

const event =(animal)=>{
    var sqll='delete from event_gen'
    db.query(sqll,(err,result)=>{
        animal.map((u,i)=>{
           var sql='select * from tip where animal_type=?'
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
                    if (uu.animal_type=u.type&&mm>=uu.min_age&&mm<=uu.max_age){
                        var f="the tip for day is " + uu.tip +" for the animal " + u.name
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


    const evints =(vet)=>{
        var sqll='select vacciens.id_v_r,animals.type,vacciens.next_appointment,animals.name,animals.age,vaccien_informations.name_vacc,animals.id from animals join health_records on animals.id=health_records.animal_id join vacciens on vacciens.animal_id=animals.id join vaccien_informations on vaccien_informations.id=vacciens.vacc_info_id join follow_t on follow_t.animal_id_f=animals.id where follow_t.vet=?'
        // var sqlll='select * from notifications where animal_id=? AND special=?'
        db.query(sqll,[owner],(err, result) => {
            if(err)console.log(err)
            result.map((u,i)=>{//here we sshow th num of day for evre vacc rim
                    var dad=new Date(u.next_appointment)
                    var d=new Date()
                    var datee = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
                    var ddss= new Date(datee)
                    var Difference_In_Time = dad.getTime() - ddss.getTime();
                    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                    var not="The remaining days for next vacc  for  animal"+  u.name +" "+Difference_In_Days +"day/s"
                    // db.query(sqlll,[u.id,u.id_v_r],(err,resu)=>{
                        // if (err) console.log(err)
                        // else if (resu.length==0) {
                            // var tt="Vaccien"
                            // var tostring=u.id_v_r
                            var sql1= "INSERT event_gen (disc) VALUES('" + not + "')"              
                            db.query(sql1,(err,resus)=>{
                                if(err)console.log(err)
                            })
                        // }
                    // })
            })
        //     result.map((u,i)=>{//here we sshow th num of day for evre vacc rim
        //         var agee=new Date(u.age)
        //         // var days= daysUntilBirthday(agee)
        //         // var birthDate= "left for birth for  " +u.name+"   is   "+days+"   day/s"
        //         // var birthDatee="birthDate"
        //         // db.query(sqlll,[u.id,birthDatee],(err,resuq)=>{
        //             // if (err) console.log(err)
        //             // else if (resuq.length==0) {
        //                 // var tt="birthDate"

        //                 var sql1= "INSERT event_gen (disc) VALUES('" + tt + "')"              
        //                 db.query(sql1,(err,resus)=>{
        //                     if(err)console.log(err)
        //                 })
        //             // }
        //         // })
        // })
        }
        )
        }


module.exports={home_vat:home_vat,
    all_an:all_an

}