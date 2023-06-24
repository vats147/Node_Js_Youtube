const express=require('express');

const db=require('./config');

const Product=require('./product');


const app=express();
app.use(express.json());

app.get("/serach/:key",async(req,res)=>{
       console.log(req.params.key)
       let data =await Product.find(
              {
                     "$or":[
                            {"name" :{$regex:req.params.key}},
                            {"price" :{$regex:req.params.key}}
                     ]
              }
       );
       
       res.send(data);
})


app.listen(3000);
