const http=require('http');
const data=require('./data');
http.createServer((req,res)=>{
       res.writeHead(200,{'Content-type':'application\json'});
       res.write(JSON.stringify(data));
       console.log(data);
       res.end();
}).listen(3000);