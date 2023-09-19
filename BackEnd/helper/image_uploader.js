const multer=require("multer")
const path=require("path")

const storage=multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'public/uploads');
    },
    filename: function (req,file,cb) {
        cd(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
});
const fileFilter=(req,file,cb)=>{
    if(file.mimeType==='image/jpeg'|| file.mimeType==='image/png'){
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
    fileFilter:fileFilter
})

module.exports={
    upload:upload,
}