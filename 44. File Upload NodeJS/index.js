const express =require('express');
const multer=require('multer');
const app=express();

const upload= multer({
       storage:multer.diskStorage({
              destination:function(req,file,cb)
              {
                     cb(null,"uploads");
              },
              filename:function(req,file,cb)
              {
                     cb(null,file.fieldname+"_"+Date.now() + ".jpg");
              }
       })
}).single("user_file");

app.post("/upload",upload,async (req,res)=>{
       res.send("File uploading...");
});

app.listen(3000);