const models=require("../models")
const db=require("../dbb/db")

const show_all_problim=(req,res) => {
    sql='select* from problims'
    db.query(sql, (err, result) => {
        if (err) return res.json(err)
        return res.json(result) + console.log()
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
    const id = req.params.id;
    var answer=req.body.answer
    var publisher=req.session.username
    const d = new Date();
    var date = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate();
    var sql= "insert into answer_tables (id_problim,answer,publisher,date) values('" + id + "','" + answer + "','" + publisher + "''" + date + "')"
    db.query(sql, (err, result) => {
        if (err) return res.json(err)
        return res.json(result) + console.log()
    }
    )
}
module.exports={show_all_problim ,add_problim ,
    add_problim:add_problim
};