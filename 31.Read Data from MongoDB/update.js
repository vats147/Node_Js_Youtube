const dbConnect = require('./mongodb');

const updateData = async () => {

       let data = await dbConnect();
       let result =await data.updateMany(
              {name: "vatsa"},{
              $set:{ price:"145" }});
       console.log(result);

}

updateData();