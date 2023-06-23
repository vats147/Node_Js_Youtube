const express=require('express');
const dbConnect=require('./mongo');
const { ObjectId } = require('mongodb');

const app=express();
app.use(express.json());

// GET API
app.get('/',async (req,res)=>{
       let data=await dbConnect();
       data= await data.find().toArray();
       res.send(data);
});

// POST API
app.post("/",async (req,res)=>{
       console.log(req.body);
       let data=req.body;
       let db= await dbConnect();
       let result=await db.insertOne(data);
       if(result.acknowledged)
       {
              console.log("Data Inserted");
              console.log(result);
              res.send({acknowledged:"True"});
       }
       // console.log(req.)
});

// PUT API
app.put("/",async(req,res)=>{
       console.log(req);
       let data=req.body;
       let db=await dbConnect();
       let result=await db.updateOne({name:"vats"},{$set:data})
       console.log(result);
       res.send(result);
});

app.delete("/:id",async (req,res)=>{

       console.log(req.params.id);
       const data=await dbConnect();
       const result= await data.deleteOne({_id:new ObjectId(req.params.id)})
       console.log(result);
       res.send("DONE");
});


app.listen(3000,()=>{
       console.log("Api Working on http://localhost:3000")
});

