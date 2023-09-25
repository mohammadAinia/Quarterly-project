const models=require("../models")
const db=require("../dbb/db")
function show_all_comon_prob(req,res){
    if (req.session.username)
    sql='select * from common_problems'
    db.query(sql, (err, result) => {
        if (err) return res.json(err)
        return res.json(result) + console.log()
    }
    )
}
module.exports={
    show_all_comon_prob:show_all_comon_prob
}