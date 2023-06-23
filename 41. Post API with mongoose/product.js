const mongoose=require('mongoose');

const config=require('./config');


const ProductSchema = new mongoose.Schema({
       name:String,
       price:Number
});

module.exports =mongoose.model('test',ProductSchema);