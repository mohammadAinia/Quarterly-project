const models=require("../models")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
function singup(req,res) {
    models.user_info.findOne({ where: { email: req.body.email } }).then(
        result => {
            if (result) {
                res.status(409).json({
                    message: "email alrady exist ",

                })

            }
            else {
                bcryptjs.genSalt(10,function (err,salt) {
                    bcryptjs.hash(req.body.password,salt,function (err,hash) {
                        const user={
                            fullname: req.body.fullname,
                            email: req.body.email,
                            phone:req.body.phone,
                            password: hash,
                            rolee:req.body.rolee

                        }
                        models.user_info.create(user).then(
                            result => {
                                res.status(201).json({
                                    message: "user created suc",

                                })
                            }
                        ).catch(error => {
                            res.status(500).json({
                                message: "somthing wrong",

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
                    message: "invalid information",

                })
            }
            else if
            (user.rolee=="DOC")
            {
                bcryptjs.compare(req.body.password,user.password,function (err,result) {
                    if (result) {
                        const token=jwt.sign({
                            email: user.email,
                            userId: user.id
                        },process.env.JWT_KEY,function (err,token) {
                            res.status(200).json({
                                message: "doc authont succsesful",
                                token:token

                            })
                        })

                    }
                    else{
                        res.status(401).json({
                            message: "invalid information",
        
                        })
                    }
                })
            }
            else{
                bcryptjs.compare(req.body.password,user.password,function (err,result) {
                    if (result) {
                        const token=jwt.sign({
                            email: user.email,
                            userId: user.id
                        },process.env.JWT_KEY,function (err,token) {
                            res.status(200).json({
                                message: "user authont succsesful",
                                token:token

                            })
                        })

                    }
                    else{
                        res.status(401).json({
                            message: "invalid information",
        
                        })
                    }
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

module.exports={singup:singup,
login:login
}