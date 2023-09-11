const models=require("../models")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
const maxAge=3*24*60*60;
const createToken=(id) => {
    return jwt.sign({ id },'JWT',{
        expiresIn: maxAge
    });
};

const singup_vet=(req,res) => {
    models.user_info.findOne({ where: { email: req.body.email } }).then(
        result => {
            if (result) {
                res.status(409).json({
                    message: "email alrady exist ",
                })
            }
            else {
                bcryptjs.genSalt(10,(err,salt) => {
                    bcryptjs.hash(req.body.password,salt,function (err,hash) {
                        const user={
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.email,
                            phone: req.body.phone,
                            password: hash,
                            rolee: "doc",
                            age: req.body.age,
                            gender: req.body.gender,
                        }

                        models.user_info.create(user).then(
                            result => {
                                // res.status(200).json(result)

                                const veterinarians={
                                    user_id: result.id,
                                    address: req.body.address,
                                    bsc: req.body.bsc,
                                    university: req.body.university,
                                    exp: req.body.exp,
                                    num_year_exp: req.body.num_year_exp,
                                    deatalis: req.body.deatalis,
                                }
                                models.veterinariann.create(veterinarians).then(
                                    result => {
                                        res.status(200).json({
                                            message: "  doc created suc",
                                        })
                                    }
                                )
                                    .catch(error => {
                                        res.status(500).json({
                                            message: "somthing wrong 11"+error
                                            ,

                                        })
                                    })


                            }
                        ).catch(error => {
                            res.status(500).json({
                                message: "somthing wrong1111"+error
                                ,

                            })
                        })

                    })
                })
            }
        }
    ).catch(
        error => {
            res.status(500).json({
                message: "somthing wrong 500"+error,

            })
        }
    )

}
const singup_user=(req,res) => {
    models.user_info.findOne({ where: { email: req.body.email } }).then(
        result => {
            if (result) {
                res.status(409).json({
                    message: "email alrady exist ",
                })
            }
            else {
                bcryptjs.genSalt(10,(err,salt) => {
                    bcryptjs.hash(req.body.password,salt,function (err,hash) {
                        const user={
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.email,
                            phone: req.body.phone,
                            password: hash,

                        }
                        models.user_info.create(user).then(
                            result => {
                                const token=createToken(user.user_id);
                                res.cookie('JWT',token,{ httpOnly: true,maxAge: maxAge*1000 });
                                //هون بدي حط انو يوجهو للصفحة الرئيسية 
                                res.status(201).json({
                                    message: "user created suc",
                                })
                            }
                        ).catch(error => {
                            res.status(500).json({
                                message: "somthing wrong"+err
                                ,

                            })
                        })

                    })
                })
            }
        }
    ).catch(
        error => {
            res.status(500).json({
                message: "somthing wrong",

            })
        }
    )

}
function login(req,res) {

    models.user_info.findOne({ where: { email: req.body.email } }).then(
        user => {
            if (user==null) {
                res.status(401).json({
                    message: "this email is not exist",
                })
            }
            else if
                (user.rolbsc=="DOC") {
                bcryptjs.compare(req.body.password,user.password,function (err,result) {
                    if (result) {
                        // const token=jwt.sign({
                        //     email: user.email,
                        //     userId: user.id
                        // },"JWT_KEY",function (err,token) {
                        //     res.status(200).json({
                        //         message: "doc authont succsesful",
                        //         token:token

                        //     })
                        // })
                        const token=createToken(user.id);
                        res.cookie('JWT',token,{ httpOnly: true,maxAge: maxAge*1000 });
                        res.status(200).json(result);

                        // return res.status(200).json(result , token);

                        // return res.json({Login: true , token,result})

                        // { user: user.id,name:user.fullname }
                    }
                    else {
                        res.status(401).json({
                            message: "incorrect password",

                        })
                    }
                })
            }
            else {
                bcryptjs.compare(req.body.password,user.password,function (err,result) {
                    if (result) {
                        // const token=jwt.sign({
                        //     email: user.email,
                        //     userId: user.id
                        // },process.env.JWT_KEY,function (err,token) {
                        //     res.status(200).json({
                        //         message: "user authont succsesful",
                        //         token: token

                        //     })
                        // })
                        const token=createToken(user.id);
                        res.cookie('JWT',token,{ httpOnly: true,maxAge: maxAge*1000 });
                        res.status(200).json(result)
                    }
                    else {
                        res.status(401).json({
                            message: "incorrect password",

                        })
                    }
                })
            }
        }
    ).catch(
        error => {
            res.status(500).json({
                message: "somthing wrong"+error,

            })
        }
    )
}
async function qlogin(req,res) {

    const isvet=models.veterinarians.findOne({ where: { email: req.body.email } })
    const isuser=models.user_info.findOne({ where: { email: req.body.email } })
    if (isvet!=null) {

        bcryptjs.compare(req.body.password,user.password,function (err,result) {
            if (result) {

                const token=createToken(isvet.id);
                res.cookie('JWT',token,{ httpOnly: true,maxAge: maxAge*1000 });
                res.status(200).json(result+"hello vet")
                // { user: user.id,name:user.fullname }
            }
            else {
                res.status(401).json({
                    message: "incorrect password",

                })
            }
        })
    }
    else if (isuser!=null) {

        bcryptjs.compare(req.body.password,user.password,function (err,result) {
            if (result) {
                const token=createToken(isuser.id);
                res.cookie('JWT',token,{ httpOnly: true,maxAge: maxAge*1000 });
                res.status(200).json(result)
            }
            else {
                res.status(401).json({
                    message: "incorrect password",
                })
            }
        })
    }
}


function logout(req,res) {
    res.cookie('JWT','',{ maxAge: 1 });
    res.status(200).json({ message: "ok is done" })
    //redirect to the home page here
}

function show_users(req,res) {
    models.user_info.findAll().then(
        data => {
            res.status(200).json({ data })
        }
    )
        .catch(
            err =>
                res.status(404).json({ err })

        )
}




const singup_veto=(req,res) => {
    models.veterinariann.findOne({ where: { bsc: req.body.bsc } }).then(
        result => {
            if (result) {
                res.status(409).json({
                    message: "email alrady exist ",
                })
            }
            else {
                bcryptjs.genSalt(10,(err,salt) => {
                    bcryptjs.hash(req.body.password,salt,function (err,hash) {
                        const user={
                           
                            address: req.body.address,
                            bsc: req.body.bsc,
                            university: req.body.university,
                            exp: req.body.exp,
                            num_year_exp: req.body.num_year_exp,
                            deatalis: req.body.deatalis,
                        }
                        models.veterinariann.create(user).then(
                            result => {
                                res.status(201).json({
                                    message: "user created suc",
                                })
                            }
                        ).catch(error => {
                            res.status(500).json({
                                message: "somthing wrong"+err
                                ,

                            })
                        })

                    })
                })
            }
        }
    ).catch(
        error => {
            res.status(500).json({
                message: "somthing wrong",

            })
        }
    )

}




module.exports=
{
    singup_user: singup_user,
    login: login,
    show_users: show_users,
    logout: logout,
    singup_vet: singup_vet,
    singup_veto:singup_veto
}
