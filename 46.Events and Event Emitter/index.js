const express=require('express');
const EventEmitter =require('events');

const app=express();

const events=new EventEmitter();

let count=0;

const reqFilter = (req,res,next)=>{
       console.log("Middleere called");
       
       count++;
       next();
       
}
app.use(reqFilter);
events.on("countAPI",()=>{
       console.log("Evenet Called",count); 
});
app.get("/",async (req,res)=>{
       res.send("Api called");
       events.emit("countAPI");
})

app.get("/serach",async (req,res)=>{
       res.send("search Api called");
})

app.get("/update",async (req,res)=>{
       res.send(" Update Api called");
       events.emit("countAPI");

})


app.listen(3000);