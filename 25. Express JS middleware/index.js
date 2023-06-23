const express=require('express');
const app=express();
const reqFilter=require('./route');


// app.use(reqFilter);

app.get('/',(req,res)=>{
       res.send('<h1>Welcome to Hoem page</h1>');
});

app.get('/user',reqFilter,(req,res)=>{
       res.send('<h1>Welcome to Users page</h1>');
});

app.get('/about',(req,res)=>{
       res.send('<h1>Welcome to about page</h1>');
});

app.listen(3000);