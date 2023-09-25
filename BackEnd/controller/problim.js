const models=require("../models")
const db=require("../dbb/db")

const show_problem_id=(req,res) => {
    var id=req.params.id
    var sql='select * from problims join user_infos on problims.publisher=user_infos.email where problims.id=?'
    var sqll='select * from answer_tables join user_infos on answer_tables.publisher_ans=user_infos.email where answer_tables.id_problim=?'
    db.query(sql,[id],(err, result) => {
        if (err) return console.log(err)
        db.query(sqll,[id], (err, resultt) => {
            if (err) return console.log(err)
            return res.json({result,resultt}) 
        }
        )
    }
    )
}
const add_problim=(req,res) => {
    var publisher=req.session.username
    var title=req.body.Name
    var desc=req.body.Text
    var animal_type=req.body.Type
    const d = new Date();
    var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();   
    var sql= "insert into problims (title,disc,publisher,animal_type,date_prob) values ('" + title + "','" + desc + "','" + publisher + "','" + animal_type + "','" + date + "')"
    db.query(sql,(err, result) => {
        if (err) return res.json(err)+console.log(err)
        
        return res.json({result,valid:true}) + console.log()
    }
    )
}

const add_answer=(req,res) => {
    if(req.session.username){
    console.log("add is invoked")
    var id = req.params.id;
    var answer=req.body.Comment
    var publisher=req.session.username
    const d = new Date();
    var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    var sql= "INSERT answer_tables (id_problim,answer,publisher_ans,date) VALUES('" + id + "','" + answer + "','" + publisher + "','" + date + "')"
    db.query(sql, (err, result) => {
        if (err) console.log(err+"this is err")
        return res.json({result,valid:true}) + console.log()
    }
    )
}
else res.json({valid:false})
}
const show_answers=(req,res)=>{
sql='SELECT * from answer_tables join problims on answer_tables.id_problim=problims.id where answer_tables.id_problim=?'
    db.query(sql, (err, result) => {
    if (err) console.log(err+"this is err")
    return res.json({result,valid:true}) + console.log()
}
)    
}

module.exports={show_problem_id ,show_problem_id ,
    add_problim:add_problim,
    add_answer:add_answer
};