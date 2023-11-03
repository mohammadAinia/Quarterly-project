const models=require("../models")
const db=require("../dbb/db")
function home_vat(req,res){
    if (req.session.username&&req.session.roleee) {
        evints(req.session.username)
        models.user_info.findOne({ where: { email: req.session.username } }).then((resp) => {
            sql='select * from animals join follow_t on follow_t.animal_id_f=animals.id where follow_t.vet=? AND special=?'
            db.query(sql,[req.session.username,1],(err, result) => {
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
function show_requsts(req,res){
    if(req.session.username&&req.session.roleee){
        sql='select * from animals join follow_t on follow_t.animal_id_f=animals.id join health_records on animals.id=health_records.animal_id where follow_t.vet=? AND follow_t.special=?'
        db.query(sql,[req.session.username,0],(error,result)=>{
        if(error){console.log(error)}
        else {
            return res.json({valid:true,result})
        }
    })
}
else{
    res.json({valid:false})
}
}
function accept_req(req,res){
    if(req.session.roleee){
        var sql='update follow_t set special=? where f_id=?'
        var id=req.params.id
        db.query(sql,[1,id],(error,result)=>{
            if(error) console.log(error)
            return res.json({valid:true,result})
        })
    }
    else {return res.json({valid:false})}
}
function show_all_vet(req,res){
    if (req.session.username) {

    sql='select * from user_infos where rolee=?'
    db.query(sql,['doc'],(error,result)=>{
        if(error){console.log(error)}
        else {
            return res.json({valid:true,result})
        }
    })
    }
    else {
        res.json({valid:false})
    }
}
function show_profile_vet(req,res){
    var id= req.params.id
    sql='select * from user_infos join veterinarianns on user_infos.id=veterinarianns.user_id where user_infos.id=?'
    db.query(sql,[id],(err,result)=>{
        if(err) console.log(err)

        return res.json({valid:true,result})
    })
}
function add_req(req,res){
    id=req.params.id
    id2=req.params.id2
    sq='select email from user_infos where id=?'
    db.query(sq,[id],(error,result)=>{
        if(error)console.log(error)
        var sql1= "INSERT follow_t (animal_id_f,vet,owner,special) VALUES('" + id2 + "','" + result[0].email + "','" + req.session.username + "','" + 0 + "')"              
        db.query(sql1,(err,result1)=>{
            return res.json({valid:true,result:result1})
        })
    })
}
function add__new_vacc(req,res){
    if(req.session.roleee=='doc'){
    // var id=req.params.id
    var name=req.body.Name
    var Type=req.body.Type
    var Minage=req.body.Minage
    var Maxage=req.body.Maxage
    var Description=req.body.Description
    var Number_of_doses=req.body.Number_of_doses

    var sql="INSERT vaccien_informations  (name_vacc,duration_ef,recommended_age,number_of_repetition,animmal_type,description) VALUES('" + name + "','" + Minage + "','" + Maxage + "','" + Number_of_doses + "','" + Type + "','" + Description + "')"
    db.query(sql,(error,result)=>{
        if (error){console.log(error+"line 15")}
        else{
            return res.json({valid:true,result})
        }
    })
}
else{ 
    return res.json({valid:false})
}
}

function show_all_vacc(req,res){
    if (req.session.username&&req.session.roleee) {

    sql='select * from vaccien_informations '
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        else {
            return res.json({valid:true,result})
        }
    })
    }
    else {
        res.json({valid:false})
    }
}
function show_all_comon_prob(req,res){
    if (req.session.username&&req.session.roleee){
    sql='select * from tip'
    db.query(sql, (err, result) => {
        if (err) return res.json(err)
        return res.json({result,valid:true})
    }
    )
}
    else   {return res.json({valid:false})}

}
function add_advice(req,res){
    if(req.session.roleee=='doc'){
    var name=req.body.Tip
    var Type=req.body.Type
    var Minage=req.body.Minage
    var Maxage=req.body.Maxage


    var sql="INSERT tip  (tip,animal_type,min_age,max_age) VALUES('" + name + "','" + Type + "','" + Minage + "','" + Maxage + "')"
    db.query(sql,(error,result)=>{
        if (error){console.log(error+"line 15")}
        else{
            return res.json({valid:true,result})
        }
    })
}
else{ 
    return res.json({valid:false})
}
}


const evints =(vet)=>{
    var sqll1='delete from event_gen'
    db.query(sqll1,(err,resulttt)=>{
        var sqll='select vacciens.id_v_r,animals.type,vacciens.next_appointment,animals.name,animals.age,vaccien_informations.name_vacc,animals.id from animals join health_records on animals.id=health_records.animal_id join vacciens on vacciens.animal_id=animals.id join vaccien_informations on vaccien_informations.id=vacciens.vacc_info_id join follow_t on follow_t.animal_id_f=animals.id where follow_t.vet=? AND follow_t.special=?'
        // var sqlll='select * from notifications where animal_id=? AND special=?'
        db.query(sqll,[vet,1],(err, result) => {
            if(err)console.log(err)
            result.map((u,i)=>{//here we sshow th num of day for evre vacc rim
                    var dad=new Date(u.next_appointment)
                    var d=new Date()
                    var datee = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
                    var ddss= new Date(datee)
                    var Difference_In_Time = dad.getTime() - ddss.getTime();
                    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                    var ss=Math.round(Difference_In_Days)
                    // console.log(ss)
                    if(ss>0){
                    var not="The remaining days for next vacc  for  animal  " +  u.name +" "+ss +" day/s"
                    // db.query(sqlll,[u.id,u.id_v_r],(err,resu)=>{
                        // if (err) console.log(err)
                        // else if (resu.length==0) hhkh{.m,m.
                            // var tt="Vaccien"
                            // var tostring=u.id_v_r
                            var sql1= "INSERT event_gen (disc) VALUES('" + not + "')"              
                            db.query(sql1,(err,resus)=>{
                                if(err)console.log(err)
                            })
                    }
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
    })
   
    }

module.exports={home_vat:home_vat,
    all_an:all_an,
    show_requsts:show_requsts,
    accept_req:accept_req,
    show_all_vet,
    show_profile_vet:show_profile_vet,
    add_req:add_req,
    add__new_vacc:add__new_vacc,
    show_all_vacc:show_all_vacc,
    show_all_comon_prob:show_all_comon_prob,
    add_advice:add_advice
}