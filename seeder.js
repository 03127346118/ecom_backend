const connectDB = require('./config/db');
 const ProductData = require('./data/products');
 const Product = require('./models/Product');

 connectDB();

 const ImportData = async() =>{
  try {

    await Product.deleteMany({})

     await Product.insertMany(ProductData)
 console.log("Data Import Success")      
  } catch (error) {
      console.log(error)
  }




 }
 ImportData();