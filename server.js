const express = require('express')
 const app = express();
 const connectDB = require('./config/db')
 const productRoutes = require('./route/productRoutes')
 const PORT = 5050;
 
 app.use(express.json());
 app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
  
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
  
    next();
  });
 app.use('/products',productRoutes);


 connectDB();
 app.listen(PORT,()=>{

console.log(`Server Running at ${PORT}`)

 })