const express=require('express');
const path=require('path');

const publicPath=path.join(__dirname,'public');
const app=express();
app.get('/',(req,res)=>{
       res.send("<h1> Index page </h1>");
       // res.end();
});

// app.use(express.static(publicPath));

app.get('/about',(req,res)=>{
       console.log(`${publicPath}/index.html`);
     res.sendFile(`${publicPath}/about.html`);
       // res.end(); 
})

app.get('*',(req,res)=>{
       res.send("<h1> 404 Page </h1>");
});

app.listen(3000);