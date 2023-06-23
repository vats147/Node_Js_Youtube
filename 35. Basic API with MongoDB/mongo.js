const {MongoClient} =require('mongodb');

const url="mongodb://127.0.0.1:27017";

const database='test';

async function dbConnect(){

       const result=new MongoClient(url);

       let db=result.db(database);

       return db.collection('test');
}

module.exports = dbConnect;