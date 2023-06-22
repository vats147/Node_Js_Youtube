const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');
console.log(dirPath);
for(let i=0;i<5;i++)
{
       fs.writeFileSync(dirPath+`/hello ${i}.txt`,"simples file ");
}

fs.readdir(dirPath,(err,files)=>

{
       console.log(files);
       files.forEach((items)=>{
              console.log("FIle name is ",items)
       })
});