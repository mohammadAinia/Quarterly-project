//جرب هاد الكود اول شيء
const models = require("../models");
const db = require("../dbb/db");

async function Add_product_store(req, res) {
    try {
        const d = new Date();
        const datee = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();

        const sql = `INSERT INTO proudact (price, animal_type, count_avilable, store_in_name, ingredients, detalies_id, short_name, category, date_added, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const result = await db.query(sql, [
            req.body.price1,
            req.body.typeAnimal,
            req.body.quantity1,
            'gh',
            req.body.ingredients,
            await show_max(),
            req.body.ingredients,
            req.body.category,
            datee,
            req.file.filename
        ]);

        const sql1 = `INSERT INTO dascription_p (id_ppr, descc, other_f, type_addtion) VALUES (?, ?, ?, ?)`;
        await db.query(sql1, [result.insertId, req.body.desc, req.body.other, req.body.typeSpecifications]);

        for (let i = 1; i <= req.body.count_size; i++) {
            const sql2 = `INSERT INTO option_p (proudact_id, special_price, count_av, detalis) VALUES (?, ?, ?, ?)`;
            await db.query(sql2, [result.insertId, req.body[`price${i}`], req.body[`quantity${i}`], req.body[`size${i}`]]);
        }

        for (let i = 1; i <= req.body.count_f; i++) {
            const sql3 = `INSERT INTO future_ui (uii, des_id) VALUES (?, ?)`;
            await db.query(sql3, [req.body[`feature${i}`], result.insertId]);
        }

        for (let i = 1; i <= req.body.pic_count; i++) {
            const sql4 = `INSERT INTO small_im (urli, prod_id) VALUES (?, ?)`;
            await db.query(sql4, [req.files[i - 1].filename, result.insertId]);
        }

        res.json({ valid: true, result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ valid: false, error: "Internal Server Error" });
    }
}

async function show_max() {
    try {
        const sql = 'SELECT MAX(detalies_id) AS p FROM proudact';
        const result = await db.query(sql);
        return result[0].p + 1;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    Add_product_store
};




//ازا مازبط فك التعليق عن هاد وجربو

// ****************************************************************************************************************************************



// const models = require("../models");
// const db = require("../dbb/db");

// function Add_product_store(req, res) {
//     const d = new Date();
//     const datee = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();

//     db.query(
//         `INSERT INTO proudact (price, animal_type, count_avilable, store_in_name, ingredients, detalies_id, short_name, category, date_added, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//         [
//             req.body.price1,
//             req.body.typeAnimal,
//             req.body.quantity1,
//             'gh',
//             req.body.ingredients,
//             show_max()
//                 .then((max) => max + 1)
//                 .catch((error) => {
//                     console.error(error);
//                     throw error;
//                 }),
//             req.body.ingredients,
//             req.body.category,
//             datee,
//             req.file.filename
//         ]
//     )
//     .then((result) => {
//         db.query(
//             `INSERT INTO dascription_p (id_ppr, descc, other_f, type_addtion) VALUES (?, ?, ?, ?)`,
//             [result.insertId, req.body.desc, req.body.other, req.body.typeSpecifications]
//         );
        
//         for (let i = 1; i <= req.body.count_size; i++) {
//             db.query(
//                 `INSERT INTO option_p (proudact_id, special_price, count_av, detalis) VALUES (?, ?, ?, ?)`,
//                 [result.insertId, req.body[`price${i}`], req.body[`quantity${i}`], req.body[`size${i}`]]
//             );
//         }

//         for (let i = 1; i <= req.body.count_f; i++) {
//             db.query(
//                 `INSERT INTO future_ui (uii, des_id) VALUES (?, ?)`,
//                 [req.body[`feature${i}`], result.insertId]
//             );
//         }

//         for (let i = 1; i <= req.body.pic_count; i++) {
//             db.query(
//                 `INSERT INTO small_im (urli, prod_id) VALUES (?, ?)`,
//                 [req.files[i - 1].filename, result.insertId]
//             );
//         }

//         res.json({ valid: true, result });
//     })
//     .catch((error) => {
//         console.error(error);
//         res.status(500).json({ valid: false, error: "Internal Server Error" });
//     });
// }

// function show_max() {
//     return db.query('SELECT MAX(detalies_id) AS p FROM proudact')
//         .then((result) => {
//             return result[0].p;
//         })
//         .catch((error) => {
//             console.error(error);
//             throw error;
//         });
// }

// module.exports = {
//     Add_product_store
// };






//ازا مازبط فك التعليق عن هاد وجربو

// ****************************************************************************************************************************************




// const models=require("../models")
// const db=require("../dbb/db")

// function Add_product_store(req,res){

//     var d=new Date()
//     var datee = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
//     sql="insert proudact (price,animal_type,count_avilable,store_in_name,ingredients,detalies_id,short_name,category,date_added,image_url) VALUES ('"+req.body.price1 +"','"+ req.body.typeAnimal+"','"+ req.body.quantity1+"','"+ "gh"+"','"+ req.body.ingredients+"','"+ show_max()+"','"+ req.body.ingredients+"','"+req.body.category +"','"+datee +"','"+ req.file.filename+"')"
//     db.query(sql,(error,result)=>{
//         if(error){console.log(error)}
//         else{
//             sql1="insert dascription_p (id_ppr,descc,other_f,type_addtion) VALUES ('"+result.insertId+"','"+req.body.desc+"','"+req.body.other+"','"+req.body.typeSpecifications+"')"
//             db.query(sql1,(error,result1)=>{
//                 if(error){console.log(error)}
//                 else{
//                     for (let i = 1; i <= req.body.count_size; i++) {
//                         // sql2="insert option_p (proudact_id,special_price,count_av,detalis)  values ('"+ result.insertId+"','"+ `${req.body.price}${i}`,+"','"+ `${req.body.quantity}${i}`+"','"+ `${req.body.size}${i}`+"')"
//                         // sql2="insert option_p (proudact_id,special_price,count_av,detalis)  values ('"+ result.insertId+"','"+req.body.price+i +"','"+ '${req.body.quantity}${}'+"','"+req.body.size+i +"')"
//                         // const sql2 = `INSERT INTO option_p (proudact_id,special_price,count_av,detalis) VALUES ('${result.insertId}','${req.body.price}${i}','${req.body.quantity}${i}','${req.body.size}${i}')`;
//                         sql2 = `INSERT INTO option_p (proudact_id, special_price, count_av, detalis) VALUES ('${result.insertId}', '${req.body['price'+i]}', '${req.body['quantity'+i]}', '${req.body['size'+i]}')`;
//                         db.query(sql2,(error,result2)=>{
//                             if(error){console.log(error)}
//                             else{
//                                 console.log("size")
//                             }
//                         }) 
                        
//                     }
//                 for (let i = 1; i <= req.body.count_f; i++) {
//                         sql3="insert future_ui (uii,des_id) values ('"+ `${req.body.feature}${i}`+"','"+result.insertId+"')"
//                         sql3=`insert future_ui (uii,des_id) values ('${req.body['feature'+i]}','${result.insertId}')`
//                         db.query(sql3,(error,result3)=>{
//                             if(error){console.log(error)}
//                             else{
//                                 console.log("futcher")
//                             }
//                         })
//                 }
                

//                 for (let i = 1; i <= req.body.pic_count; i++) {
//                     const sql4 = `INSERT INTO small_im (urli, prod_id) VALUES (?, ?)`;
//                      db.query(sql4, [req.files[i - 1].filename, result.insertId]);
//                 }


//                 // for (let i = 1; i <= req.body.pic_count; i++) {
//                 //     sql4="insert small_im (urli,prod_id) values ('"+req.file.filename+"','"+result.insertId+"')"
//                 //     db.query(sql4,(error,result4)=>{
//                 //         if(error){console.log(error)}
//                 //         else{
                            
//                 //             console.log("picc")
//                 //         }
//                 //     })
//                 // }
//             //     req.files.forEach((file, index) => {
//             //         console.log(`File ${index + 1}: ${file.filename}`);
//             // //     sql4="insert small_im (urli,prod_id) values ('"+req.file.filename+"','"+result.insertId+"')"
//             //     //     db.query(sql4,(error,result4)=>{
//             //     //         if(error){console.log(error)}
//             //     //         else{
                            
//             //     //             console.log("picc")
//             //     //         }
//             //     //     })
//             //     });
//                 res.json({valid:true,result})
//                 }
//             })
//         }
//     })
// }

// function show_max(){ 
    
//     sql='select max(detalies_id) as p from proudact'
//     db.query(sql,(error,result)=>{
//         if(error){console.log(error)}
//         else{
//             return result[0].p+1
//         }
//     })
// }
// module.exports={
//     Add_product_store
// }