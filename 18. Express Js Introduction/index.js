const express=require('express');
const app=express();

app.get('/',(req,res)=>{
       console.log("request Recived");
       res.send('<h1>Hello</h1>');
       res.end();
});

app.listen(3000);