const fs=require('fs');
const path=require('path');

const dirPath=path.join(__dirname,'crud');
const filePath=`${dirPath}/apple.txt`;

// Create file

// fs.writeFileSync(filePath,'Hello World');

// Read File

// fs.readFile(filePath,'utf8',(err,result)=>{
//        console.log(result);
// });

// Update File

// fs.appendFile(filePath,'Hello New WOrld',(err)=>{
//        if(!err)
//        {
//               console.log("File is Updated");
//        }
// });

// Rename file 
// fs.rename(filePath,`${dirPath}/new.txt`,(err)=>{
//        console.log(err);
// })

// Delete file
// fs.unlink(`${dirPath}/new.txt`,(err)=>{
//        console.log(err);
// });