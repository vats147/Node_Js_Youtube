const mongoose=require('mongoose');

const ProductSchema = new mongoose.Schema({
       name:String,
       price:Number,
       brand:String,
});
 mongoose.connect("mongodb://127.0.0.1:27017/test");

const saveInDB = async ()=>{


       const ProductsModel= new mongoose.model('test',ProductSchema);
       let data=new ProductsModel({name:"CYX",price:"1000",brand:"APPLE"});
       let result= await data.save();
       console.log(result);

};

// main();

const updateINDB=async ()=>{
       console.log("Function is called");
       const Product = new mongoose.model('test',ProductSchema);
       let data = await Product.updateOne(
              {name:"CYX"},
              {$set:{price:1452}}
       );
       console.log(data);

}
// updateINDB();

const deleleteInDB= async () =>{
       const Product = new mongoose.model('test',ProductSchema);
       
       let data =await Product.deleteOne({name:"CYX"});
       console.log(data);
}

// deleleteInDB();


const findInDB= async () =>{
       const Product = new mongoose.model('test',ProductSchema);
       
       let data =await Product.find({name:"MYSY"});
       console.log(data);
}

findInDB();