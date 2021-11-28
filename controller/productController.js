const Product = require('../models/Product');

const GetAllProducts = async(req,res) =>{

try{
const products = await Product.find({});
res.json(products);

}
catch(error){
 console.error("Error")
}


}

module.exports = GetAllProducts;