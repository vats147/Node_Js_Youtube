const express=require('express');

const db=require('./config');

const Product=require('./product');


const app=express();
app.use(express.json());

app.post("/create",async (req,res)=>{
       console.log(req.body);
       let data=new Product(req.body);
       let result = await data.save();
       console.log(result);
       res.send("Done");
});

app.get("/list",async (req,res)=>{

       let data=await Product.find();
       console.log(data);   

       res.send(data);
});

app.delete("/delete/:_id",async(req,res)=>{
       let data=await Product.deleteOne(req.params);
       res.send(data);


});

app.put("/update/:_id",async (req,res)=>{
       let data= await Product.updateOne(req.params,{$set:req.body});
       res.send(data);
});


app.listen(3000);
