const express=require('express');
const path=require('path');

const publicPath=path.join(__dirname,'/public');
const app=express();
app.get('/',(req,res)=>{
       res.send("<h1> Index page </h1>");
       res.end();
});

app.use(express.static(publicPath));

app.get('/about',(req,res)=>{
       console.log(publicPath);
       // res.render(publicPath);
       res.end();
})


app.listen(3000);