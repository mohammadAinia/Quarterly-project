const models=require("../models")
const db=require("../dbb/db")
// function count_of_stars(id){
//     sql='select * from review_table where pro_id=?'
//     db.query(sql,[id],(error,result)=>{
//         if(error){console.log(error)}
//         else{

// var starsCount = {'1':0,'2':0,'3':0,'4':0,'5':0};

// for (let i = 0; i < result.length; i++) {
//     let rating = result[i].stars;
//     if (starsCount[rating]) {
//         starsCount[rating] += 1;
//     } else {
//         starsCount[rating] = 1;
//     }
// }
// return starsCount;
//         }
//     })
// }
function new_arrivle(req,res){
    if(req.session.username){
    sql='SELECT * FROM `proudact` WHERE DATEDIFF(CURRENT_DATE(),proudact.date_added)<10'
    db.query(sql,(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
            
        }
    })
}
else res.json({valid:false})
}
function sort_by_animal(req,res){
    
 
       animal=req.body.animal
    db.query('SELECT * FROM proudact WHERE animal_type LIKE ?', ['%'+animal+'%'], (error, results) => {
    if (error) { 
            console.error(error);
        } else {
            res.json({valid:true,results})
        }

    });
    
}
function search_salary_and_category(req,res){
    sql='select * from proudact where category=? AND price <= ?'
    // sqll='SELECT * FROM proudact WHERE animal_type LIKE ?', ['%'+req.body.animals+'%'],'AND category like',['%'+req.body.category+'%']
    db.query('SELECT * FROM proudact WHERE animal_type LIKE ? AND category LIKE ? and price >=?', ['%' + req.body.animals + '%', '%' + req.body.category + '%','%'+req.body.price+'%'],(error,result)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result})
        }
    })
}

function open_proudact(req,res){
    id=req.params.id
    sql='select * from proudact JOIN count_stars on count_stars.pr_id=proudact.id where proudact.id=?'
    db.query(sql,[id],(error,result)=>{
        if(error){console.log(error)}
        else{
            sql1='select * from dascription_p where id_ppr=?'
            db.query(sql1,[result[0].id],(error,result1)=>{
                if(error){console.log(error)}
                else{
                    if(result1[0].type_addtion=='0'){
                        if(result[0].size_id=='0'){
                        res.json({result1,result,valid:true})
                            
                        } 
                        else {
                            sql3='select * from option_p where proudact_id =?'
                            db.query(sql3,[result[0].id],(error,result3)=>{
                                if(error){console.log(error)}
                                else{ 
                                    res.json({result1,result,result3,valid:true})
                                }
                            }) 
                        }
                    }
                    else {
                        sql23='select * from future_ui where des_id=?'
                        db.query(sql23,[result1[0].id_ppr],(error,result2)=>{
                            if(error){console.log(error)}
                            else{
                                if(result[0].size_id=='0'){
                                    res.json({result1,result,result2,valid:true})
                                    }
                                    else { 
                                        sql32='select * from option_p where proudact_id=?'
                                        db.query(sql32,[result[0].id],(error,result3)=>{
                                            if(error){console.log(error)}
                                            else{
                                                res.json({result1,result,result2,result3,valid:true})
                                            }
                                        })
                                    }
                                // res.json({result1,result,result2,valid:true})
                            }
                        })
                    }
                }
            }) 
        }
    })
} 

module.exports={
    new_arrivle:new_arrivle,
    sort_by_animal,
    search_salary_and_category,
    open_proudact
}
