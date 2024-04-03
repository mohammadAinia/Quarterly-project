const models=require("../models")
const db=require("../dbb/db")
function Add_product_store(req,res){
    sql="insert proudact (price,animal_type,count_avilable,store_in_name,ingredients,detalies_id,short_name,category,date_added,image_url) VALUES ('"+ +"','"+ +"','"+ +"','"+ +"','"+ +"','"+ +"','"+ +"','"+ +"','"+ +"','"+ +"')"
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        else{
            sql1="insert dascription_p (id_ppr,descc,other_f,type_addtion) VALUES ('"+ +"')"

        }
    })
}

function show_max(){
    
    sql='select max(detalies_id) as p from proudact'
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        else{
            return result[0].p+1
        }
    })
}
module.exports={}