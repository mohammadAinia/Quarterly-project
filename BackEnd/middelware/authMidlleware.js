const jwt=require('jsonwebtoken');

const requireAuth=(req,res,next) => {
    const token=req.cookies.jwt;

    // check json web token exists & is verified
    if (token) {
        jwt.verify(token,'JWT',(err,decodedToken) => {
            if (err) {
                console.log("hshshs")
                console.log(err.message);
                // res.redirect('/login');
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        // res.redirect('/login');
        console.log("omg ")
    }
};
module.exports={requireAuth}