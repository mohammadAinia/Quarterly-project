const models=require("../models")
const db=require("../dbb/db")
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
    id=req.body.id
    id_vet=req.params.id
    sql='select * from veterinarianns where id=?'
    db.query(sql,[id],(error,result)=>{
        if(result[0].cl_id!=null){
            return res.json({valid:false})
        }
        else 
        {var sql1='update veterinarianns set cl_id=? where id=?'
            db.query(sql1,[cl,id_vet],(error,result1)=>{
                if(error){console.log}
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
    sql='select * from veterinarianns where c_id=?'
    db.query(sql,[1],(error,result)=>{
        if(error) console.log (error)
        else return res.json(result)
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
}

























// result.forEach((el,index,are)=>{
//     console.log(el.id)
//     console.log(index)
//     console.log(are)
// });










