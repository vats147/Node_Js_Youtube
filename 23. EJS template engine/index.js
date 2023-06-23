const express=require('express');
const path=require('path');
const app=express();

app.set('view engine','ejs');

app.get('/profile',(req,res)=>{
       const user={
              name:'Baysal',
              email:'vats@147gmail.com'
       };
       res.render('profile',{user});
});



app.listen(3000);
