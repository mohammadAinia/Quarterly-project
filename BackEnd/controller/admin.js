const models=require("../models")
const db=require("../dbb/db")
function Add_product_store(req,res){

    var d=new Date()
    var datee = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    sql="insert proudact (price,animal_type,count_avilable,store_in_name,ingredients,detalies_id,short_name,category,date_added,image_url) VALUES ('"+req.body.price1 +"','"+ req.body.typeAnimal+"','"+ req.body.quantity1+"','"+ "gh"+"','"+ req.body.ingredients+"','"+ show_max()+"','"+ req.body.ingredients+"','"+req.body.category +"','"+datee +"','"+ req.file.filename+"')"
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        else{
            sql1="insert dascription_p (id_ppr,descc,other_f,type_addtion) VALUES ('"+result.insertId+"','"+req.body.desc+"','"+req.body.other+"','"+req.body.typeSpecifications+"')"
            db.query(sql1,(error,result1)=>{
                if(error){console.log(error)}
                else{
                    for (let i = 1; i <= req.body.count_size; i++) {
                        // sql2="insert option_p (proudact_id,special_price,count_av,detalis)  values ('"+ result.insertId+"','"+ `${req.body.price}${i}`,+"','"+ `${req.body.quantity}${i}`+"','"+ `${req.body.size}${i}`+"')"
                        // sql2="insert option_p (proudact_id,special_price,count_av,detalis)  values ('"+ result.insertId+"','"+req.body.price+i +"','"+ '${req.body.quantity}${}'+"','"+req.body.size+i +"')"
                        // const sql2 = `INSERT INTO option_p (proudact_id,special_price,count_av,detalis) VALUES ('${result.insertId}','${req.body.price}${i}','${req.body.quantity}${i}','${req.body.size}${i}')`;
                        sql2 = `INSERT INTO option_p (proudact_id, special_price, count_av, detalis) VALUES ('${result.insertId}', '${req.body['price'+i]}', '${req.body['quantity'+i]}', '${req.body['size'+i]}')`;
                        db.query(sql2,(error,result2)=>{
                            if(error){console.log(error)}
                            else{
                                console.log("size")
                            }
                        }) 
                        
                    }
                for (let i = 1; i <= req.body.count_f; i++) {
                        sql3="insert future_ui (uii,des_id) values ('"+ `${req.body.feature}${i}`+"','"+result.insertId+"')"
                        sql3=`insert future_ui (uii,des_id) values ('${req.body['feature'+i]}','${result.insertId}')`
                        db.query(sql3,(error,result3)=>{
                            if(error){console.log(error)}
                            else{
                                console.log("futcher")
                            }
                        })
                }
                // for (let i = 1; i <= req.body.pic_count; i++) {
                //     sql4="insert small_im (urli,prod_id) values ('"+req.file.filename+"','"+result.insertId+"')"
                //     db.query(sql4,(error,result4)=>{
                //         if(error){console.log(error)}
                //         else{
                            
                //             console.log("picc")
                //         }
                //     })
                // }
                req.files.forEach((file, index) => {
                    console.log(`File ${index + 1}: ${file.filename}`);
            //     sql4="insert small_im (urli,prod_id) values ('"+req.file.filename+"','"+result.insertId+"')"
                //     db.query(sql4,(error,result4)=>{
                //         if(error){console.log(error)}
                //         else{
                            
                //             console.log("picc")
                //         }
                //     })
                });
                res.json({valid:true,result})
                }
            })
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
module.exports={
    Add_product_store
}