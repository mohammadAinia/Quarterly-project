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
function get_category_home(){
    
}
function new_arrivle(req,res){
    
    if(req.session.username){
    sql='SELECT * FROM `proudact` WHERE DATEDIFF(CURRENT_DATE(),proudact.date_added)<10'
    db.query(sql,(error,result)=>{
        if(error){console.log(error)} 
        else{
            sql='select * from category_t '
    db.query(sql,(error,result2)=>{
        if(error){console.log(error)}
        else{
            res.json({valid:true,result,result2})
        }
    })
            
            
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
    sqllwlw='select * from review_table where pro_id=?'
    db.query(sqllwlw,[id],(error,result9)=>{
        if(error){console.log(error)}
        else{
            sqlimage='select * from small_im where prod_id=?'
            db.query(sqlimage,[id],(error,result651)=>{
                if(error){console.log(error)}
                else{
                    sql='select * from proudact JOIN count_stars on count_stars.pr_id=proudact.id where proudact.id=?'
            db.query(sql,[id],(error,result)=>{
                if(error){console.log(error)}
                else{ sql12345='select *from proudact where animal_type like ? and id!=? '
                    db.query(sql12345,['%'+result[0].animal_type+'%',result[0].id],(error,result63)=>{
                        if(error){console.log(error)}
                        else{
                             
                            v=storg_id(result,result63)
                            sql1='select * from dascription_p where id_ppr=?'
                            db.query(sql1,[result[0].id],(error,result1)=>{
                            if(error){console.log(error)}
                            else{
                            if(result1[0].type_addtion=='0'){
                                if(result[0].size_id=='0'){
                                res.json({result1,result,valid:true,result9,v,result651})
                                } 
                                else {
                                    sql3='select * from option_p where proudact_id =?'
                                    db.query(sql3,[result[0].id],(error,result3)=>{
                                        if(error){console.log(error)}
                                        else{  
                                            res.json({result651,result1,result,result3,valid:true,result9,v})
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
                                            res.json({result651,result1,result,result2,valid:true,result9,v})
                                            }
                                            else { 
                                                sql32='select * from option_p where proudact_id=?'
                                                db.query(sql32,[result[0].id],(error,result3)=>{
                                                    if(error){console.log(error)}
                                                    else{
                                                        res.json({result651,result9,result1,result,result2,result3,valid:true,v})
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
            })
                }
            })
            
        }
    })
    
}  
function compear_array(st,st2){
    const words = st.split(',');
    const words2 = st2.split(',');
    var count=0
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words2.length; j++) {
            if(words[i]===words2[j]){
                count++
            }
        }
        
    }
    return count

}
function storg_id(r,e){
    const av =[]
    for (let i = 0; i < e.length; i++) {
        if(compear_array(r[0].ingredients,e[i].ingredients)){
          av.push(e[i])  
        }
    }
    return av
}
function show_detalis_s(req,res){
    sql='select * from option_p where id_add=?'
    db.query(sql,[req.params.selectedSize],(error,result)=>{
        if(error){console.log(error)}
        else{ 
            console.log(result)
            res.json({valid:true,result})
            
        }
    })
}
function add_rev(req,res){
    var e=req.body.selectedStar
    sql432='select * from review_table where user_name=? and pro_id=?'
    db.query(sql432,[req.session.namee,req.params.id],(error,result12)=>{
        if(error){console.log(error)}
        else{
            if(result12.length!=0){
                sqll='update review_table set review=?,stars=?,date_add=? where pro_id=?'
                var d=new Date()
                var datee = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
                db.query(sqll,[req.body.Comment,req.body.selectedStar,datee,req.params.id],(error,result)=>{
                    if(error){console.log(error)}
                    else if (req.body.selectedStar==1){
                        sql2='update count_stars set one=one+1 where pr_id=?'
                        db.query(sql2,[req.body.selectedStar,req.params.id],(error,result)=>{
                            if(error){console.log(error)}
                            
                        })
                    } 
                        else if (req.body.selectedStar==2){
                        sql2='update count_stars set two=two+1 where pr_id=?'
                        db.query(sql2,[req.params.id],(error,result)=>{
                            if(error){console.log(error)}
                            
                        })
                    }   
                    else if (req.body.selectedStar==3){
                        sql2='update count_stars set three=three+1 where pr_id=?'
                        db.query(sql2,[req.body.selectedStar,req.params.id],(error,result)=>{
                            if(error){console.log(error)}
                            
                        })
                    }               
                        else if (req.body.selectedStar==4){
                        sql2='update count_stars set four=four+1 where pr_id=?'
                        db.query(sql2,[req.body.selectedStar,req.params.id],(error,result)=>{
                            if(error){console.log(error)}
                            
                        })
                    }                
                        else if (req.body.selectedStar==5){
                        sql2='update count_stars set five=five+1 where pr_id=?'
                        db.query(sql2,[req.body.selectedStar,req.params.id],(error,result)=>{
                            if(error){console.log(error)}
                            
                        })
                    } 
                        sql1234='select * from count_stars where pr_id=?'
                        db.query(sql1234,[req.params.id],(error,result2)=>{
                            if(error){console.log(error)}
                            else{
                                var neww=result2[0].one+result2[0].two*2+result2[0].three*3+result2[0].four*4+result2[0].five*5
                                var newww=result2[0].one+result2[0].two+result2[0].three+result2[0].four+result2[0].five
                                var newwww=neww/newww
                                sql120='update proudact set star_count=?,comments=comments+1 where id=?'
                                db.query(sql120,[newwww,req.params.id],(error,result)=>{
                                if(error){console.log(error)}
                                else{
                                res.json({valid:true,result})
                                }
                        })
                            }
                        })
                    
                })
        }
        else {    
            var d=new Date()
            var datee = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
             var sql1= "INSERT review_table (review,stars,pro_id,like_count,dislike_count,date_add,user_name) VALUES('" +req.body.Comment+ "','" + req.body.selectedStar + "','" + req.params.id + "','" +0+ "','" +0+ "','"+datee+"','"+req.session.namee+"')"              
            db.query(sql1,(error,result)=>{
                if(error){console.log(error)}
                else{
                    console.log(result.insertId)
                    sqll='select * from count_stars where pr_id=?'
                    db.query(sqll,[req.params.id],(error,result1)=>{
                        if(error){console.log(error)}
                        
                        else if (result1.length!=0&&req.body.selectedStar==1){
                            sql2='update count_stars set one=one+1 where pr_id=?'
                            db.query(sql2,[req.params.id],(error,result)=>{
                                if(error){console.log(error)}
                                
                            })
                        }
                            else if (result1.length!=0&&req.body.selectedStar==2){
                            sql2='update count_stars set two=two+1 where pr_id=?'
                            db.query(sql2,[req.params.id],(error,result)=>{
                                if(error){console.log(error)}
                                
                            })
                        }   
                        else if (result1.length!=0&&req.body.selectedStar==3){
                            sql2='update count_stars set three=three+1 where pr_id=?'
                            db.query(sql2,[req.params.id],(error,result)=>{
                                if(error){console.log(error)}
                                
                            })
                        }               
                            else if (result1.length!=0&&req.body.selectedStar==4){
                            sql2='update count_stars set four=four+1 where pr_id=?'
                            db.query(sql2,[req.params.id],(error,result)=>{
                                if(error){console.log(error)}
                                
                            })
                        }                
                            else if (result1.length!=0&&req.body.selectedStar==5){
                            sql2='update count_stars set five=five+1 where pr_id=?'
                            db.query(sql2,[req.params.id],(error,result)=>{
                                if(error){console.log(error)}
                                
                            })
                        }
                    })
                    console.log(1)
                    sql1234='select * from count_stars where pr_id=?'
                    db.query(sql1234,[req.params.id],(error,result2)=>{
                        if(error){console.log(error)}
                        else{
                            var neww=result2[0].one+result2[0].two*2+result2[0].three*3+result2[0].four*4+result2[0].five*5
                            var newww=result2[0].one+result2[0].two+result2[0].three+result2[0].four+result2[0].five
                            var newwww=neww/newww
                            sql120='update proudact set star_count=?,comments=comments+1 where id=?'
                            db.query(sql120,[newwww,req.params.id],(error,result)=>{
                            if(error){console.log(error)}
                            else{
                            res.json({valid:true,result})
                            }
                    })
                        }
                    })
                    console.log(2)
                }
                
            })}
    }
    })


}
module.exports={
    new_arrivle:new_arrivle,
    sort_by_animal,
    search_salary_and_category,
    open_proudact,
    show_detalis_s,
    add_rev
}




//  else if (result1.length==0&&req.body.selectedStar==1){ 
                //     sqlll="insert into count_stars (pr_id,one,two,three,four,five) values ('"+ req.params.id+"','"+ 1+"','"+ 0 +"','"+ 0+"','"+ 0+"','"+ 0+"')"
                //     db.query(sqlll,(error,result)=>{
                //         if(error){console.log(error)}
                        
                //     })
                // }
                // else if (result1.length==0&&req.body.selectedStar==2){
                //     sqlll="insert into count_stars (pr_id,one,two,three,four,five) values ('"+ req.params.id+"','"+ 0+"','"+ 2 +"','"+ 0+"','"+ 0+"','"+ 0+"')"
                //     db.query(sqlll,(error,result)=>{
                //         if(error){console.log(error)}
                        
                //     })
                // }
                // else if (result1.length==0&&req.body.selectedStar==3){
                //     sqlll="insert into count_stars (pr_id,one,two,three,four,five) values ('"+ req.params.id+"','"+ 0+"','"+ 0 +"','"+ 3+"','"+ 0+"','"+ 0+"')"
                //     db.query(sqlll,(error,result)=>{
                //         if(error){console.log(error)}
                        
                //     })
                // }else if (result1.length==0&&req.body.selectedStar==4){
                //     sqlll="insert into count_stars (pr_id,one,two,three,four,five) values ('"+ req.params.id+"','"+ 0+"','"+ 0 +"','"+ 0+"','"+ 4+"','"+ 0+"')"
                //     db.query(sqlll,(error,result)=>{
                //         if(error){console.log(error)}
                        
                //     })
                // }else if (result1.length==0&&req.body.selectedStar==5){
                //     sqlll="insert into count_stars (pr_id,one,two,three,four,five) values ('"+ req.params.id+"','"+ 1+"','"+ 0 +"','"+ 0+"','"+ 0+"','"+ 5+"')"
                //     db.query(sqlll,(error,result)=>{
                //         if(error){console.log(error)}
                        
                //     })
                // }
                ////////////////////////////////