
const models=require("../models")
const db=require("../dbb/db")
const express=require("express")
const router=express.Router()
const admin=require("../controller/admin")
const imageUploader = require('../helper/image_uploader')

function Add_product_store(req,res){

    var d=new Date()
    var datee = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    sql="insert proudact (price,animal_type,count_avilable,store_in_name,ingredients,detalies_id,short_name,category,date_added,image_url) VALUES ('"+req.body.price1 +"','"+ req.body.typeAnimal+"','"+ req.body.quantity1+"','"+ req.body.brand+"','"+ req.body.ingredients+"','"+ show_max()+"','"+ req.body.shortDesc+"','"+req.body.category +"','"+datee +"','"+ req.files[0].filename+"')"
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
                        // sql3="insert future_ui (uii,des_id) values ('"+ `${req.body.feature}${i}`+"','"+result.insertId+"')"
                        sql3=`insert future_ui (uii,des_id) values ('${req.body['feature'+i]}','${result.insertId}')`
                        db.query(sql3,(error,result3)=>{
                            if(error){console.log(error)}
                            else{
                                console.log("futcher")
                            }
                        })
                }
                
                for (let i = 0; i < req.files.length; i++) {
                    
                    sql4="insert small_im (urli,prod_id) values ('"+req.files[i].filename+"','"+result.insertId+"')"
                    db.query(sql4,(error,result4)=>{
                        if(error){console.log(error)}
                        else{
                            
                            console.log("picc")
                        } 
                    })
                }
                sql5="insert into count_stars (pr_id) values ('"+result.insertId+"')"
                db.query(sql5,(err,r)=>{
                    if(err){console.log(err)}
                    
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
function add_new_category(req,res){
    sql="insert into category_t (categ,animal_type,prod_type,url_image) values ('"+ +"')"
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
        }
    })
}
function add_category(req,res){
    if(req.session.adminstritor){
    sql="insert into category_t (categ,animal_type,prod_type,url_imagee) values ('"+ req.body.category_name+"','"+ req.body.typeAnimal+"','"+ req.body.category+"','"+ req.files[0].filename+"')"
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
        }
    })
}
else {            res.json({valid:false})
}
}

function show_c(req,res){
    sql='select  DISTINCT prod_type from category_t'
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
            console.log("doneeee")
        }
    })
}
function add_new_brand(req,res){
    if (req.session.adminstritor){
    sql="insert into brands (name_b,image_b) values ('"+ req.body.brand_name+"','"+req.files[0].filename +"')"
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
            
        }
    })
}
else {            res.json({valid:false})
}
}
module.exports={
    Add_product_store,
    add_category,
    show_c,
    add_new_brand
}
