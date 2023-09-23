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
const add_problim=(ress,res) => {
    var publisher=req.session.username
    var title=req.body.Title
    var desc=req.body.Description
    var animal_type=req.body.animal_type
    const d = new Date();
    var date = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate();   
    var sql= "insert into problims (title,disc,publisher,animal_type,date_prob) values('" + title + "','" + desc + "','" + publisher + "','" + animal_type + "''" + date + "')"
    db.query(sql,(err, result) => {
        if (err) return res.json(err)
        return res.json(result) + console.log()
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