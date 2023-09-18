const models=require("../models")
const bcryptjs=require("bcryptjs")
const singup_vet=(req,res) => {
    models.user_info.findOne({ where: { email: req.body.Email } }).then(
        result => {
            if (result) {
                res.json({
                    message: "email alrady exist ",
                })
            }
            else {
                bcryptjs.genSalt(10,(err,salt) => {
                    bcryptjs.hash(req.body.Password,salt,function (err,hash) {
                        const user={
                            
                            first_name: req.body.First_name,
                            last_name: req.body.Last_name,
                            email: req.body.Email,
                            phone: req.body.Phone,
                            password: hash,
                            rolee: "doc",
                            age: req.body.Age,
                            gender: req.body.Gender,
                        }

                        models.user_info.create(user).then(
                            result => {
                                // res.status(200).json(result)

                                const veterinarians={
                                    user_id: result.id,
                                    address: req.body.Addres,
                                    bsc: req.body.Bachelor,
                                    university: req.body.University,
                                    exp: req.body.exp,
                                    num_year_exp: req.body.num_year_exp,
                                    deatalis: req.body.Previous_work,
                                    url_bsc:req.file.bsc,
                                    url_prev_imag:req.file.prev
                                    
                                }
                                models.veterinariann.create(veterinarians).then(
                                    result => {
                                        req.session.username=user.email
                                        return res.json(
                                            { Login: true,username: req.session.username }
                                        )
                                    }
                                )
                                    .catch(error => {
                                        return res.json({
                                            valid: false
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
    models.user_info.findOne({ where: { email: req.body.Email } }).then(
        result => {
            if (result) {
                return res.json({
                    message: "email user alrady exist ",
                })
            }
            else {
                bcryptjs.genSalt(10,(err,salt) => {
                    bcryptjs.hash(req.body.Password,salt,function (err,hash) {
                        const user={
                            first_name: req.body.First_name,
                            last_name: req.body.Last_name,
                            email: req.body.Email,
                            phone: req.body.Phone,
                            password: hash,
                            rolee: "user",
                            age: req.body.Age,
                            gender: req.body.Gender,
                        }
                        models.user_info.create(user).then(
                            result => {
                                req.session.username=user.email
                                // console.log(req.session.username)
                                return res.json(

                                    { Login: true,username: req.session.username }
                                )
                            }
                        ).catch(error => {
                            return res.json({
                                valid: false
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
                return res.json({
                    message: "this email is not exist",
                })
            }
            else if
                (user.rolee=="DOC") {
                bcryptjs.compare(req.body.password,user.password,function (err,result) {
                    if (result) {
                        req.session.username=user.email
                        console.log(user.first_name)
                        // console.log(req.session.username)
                        return res.json({ Login: true,username: req.session.username });

                    }
                    else {
                        return res.json({
                            message: "incorrect password",

                        })
                    }
                })
            }
            else if (user.rolee="user") {
                bcryptjs.compare(req.body.password,user.password,function (err,result) {
                    if (result) {
                        req.session.username=user.email
                        console.log(user.first_name)
                        return res.json({ Login: true,username: req.session.username });
                    }
                    else {
                        return res.status(401).json({
                            message: "incorrect password",

                        })
                    }
                })
            }
            else
                return res.json({ Login: false })
        }
    ).catch(
        error => {
            return res.json({
                message: "somthing wrong"+error,

            })
        }
    )
}

function logout(req,res) {

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

const home_owner=(req,res) => {
    if (req.session.username) {
        
        models.user_info.findOne({where:{email:req.session.username}}).then(
            resp=>{
                models.animal.findAll({where:{owner:req.session.username}}).then(
                    ress=>{
                        models.common_problim.findAll().then(
                            result=>{
                        return res.json({ valid: true,username:resp.first_name ,name:ress.name,image:ress.urlImage,pro:result.title})
                            }
                        ).catch(
                            err=>{
                                return res.json({valid :false})
                            }
                        )
                    }
                
                )
                .catch(
                    err=>{
                        return  res.json({valid :false})
                    }
                )
            }
        ).catch(
            err=>{
                return  res.json({valid :false})
            }
        )
    }
    else {
        return res.json({ valid: false })
    }
}




module.exports=
{
    singup_user: singup_user,
    login: login,
    show_users: show_users,
    logout: logout,
    singup_vet: singup_vet,
    home_owner: home_owner
}
