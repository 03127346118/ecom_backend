const express = require('express')
const router = express.Router();
const allProduct = require('../controller/productController')
//get all products
router.get('/',allProduct)



module.exports = router;