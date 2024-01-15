const models=require("../models")
const db=require("../dbb/db")
function create_clinic(req,res){
namee=req.body.name
place=req.body.place
number=req.body.number
openq=req.body.openq
closeq=req.body.closeq
    var sql= "INSERT clinics (c_name,c_place,c_number,time_open,time_close) VALUES('" + namee + "','" + place + "','" + number + "','" + openq + "','" + closeq + "')"
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
    id=req.params.id
    sql='select * from clinics '
    db.query(sql,(err,result)=>{
        if(err){console.log(err)}
        else {
            return res.json(result)
        }

    })
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
function add_doc_to_cli(req,res){
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

module.exports={
    create_clinic,
    showd_c,
    show_all,
    search_clinc,
    add_doc_to_cli,
    
}

























// result.forEach((el,index,are)=>{
//     console.log(el.id)
//     console.log(index)
//     console.log(are)
// });