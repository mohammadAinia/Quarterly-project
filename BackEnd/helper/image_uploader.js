const multer=require("multer")
const path=require("path")

const storage=multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'public/uploads');
    },
    filename: function (req,file,cd) {
        cd(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
});
const fileFilter=(req,file,cd)=>{
    if(file.mimeType==='image/jpeg'|| file.mimeType==='image/png'||file.mimeType==='image/jpg'){
     cd(null,true);   
    }
    else
    {
        cd(new Error('Unsported this type'))
    }
}
const upload =multer({
    storage : storage ,
    limits:{fieldSize:1024*1024*10},
    // fileFilter:fileFilter
})

module.exports={
    upload:upload,
}