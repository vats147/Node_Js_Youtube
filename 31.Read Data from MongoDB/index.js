const {MongoClient} =require('mongodb');
const dbConnect= require('./mongodb');


// console.log(dbConnection().then(result =>{
//        console.log(result.find().toArray())
// }));


const main=async()=>{
       let data = await dbConnect();
       data=await data.find().toArray();
       console.log(data);
}


main();