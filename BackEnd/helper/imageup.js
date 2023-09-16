var multer=require("multer")
var path=require("path")
const storage=multer.diskStorage({
    destination:function(req,file,cb){
cb(null,path.join(__dirname,"public","uploads"))
    },
    filename:function(req,file,cb){
        const uniqsuff=Date.now()+'-'
        cb(null,uniqsuff+file.originalname)
    }
})
const upload=multer({storage:storage})
module.exports={
    upload:upload
}