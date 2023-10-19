const express = require('express');
const Product = require('../models/productModel');
const { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController')

const router = express.Router();

// fetch all products
router.get('/', getAllProducts);

// fetch a product
router.get('/:id', getProduct);

// add products
router.post('/', createProduct);

// update a product
router.put('/:id', updateProduct);

// delete a product
router.delete('/:id', deleteProduct)

module.exports = router;