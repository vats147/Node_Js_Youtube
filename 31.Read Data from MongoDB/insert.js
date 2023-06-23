const dbConnect = require('./mongodb');

const insert = async () => {
       const db = await dbConnect();
       const result = await db.insertOne({
              name: "vatsa",
              price: "12"
       });
       if (result.acknowledged)
              console.log("Data Inserted");

       console.log("Insert Function");


}

insert();
module.exports = insert;