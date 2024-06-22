const express = require('express');
const router = express.Router();
const products = require('../controllers/product.controller.js');
const validateObjectId = require('../middlewares/validateObjectId');

// Create a new Product
router.post('/api/products', products.create);

// Retrieve all Products
router.get('/api/products', products.findAll);

// Retrieve a single Product with id
router.get('/api/products/:id', validateObjectId, products.findOne);

// Update a Product with id
router.put('/api/products/:id', validateObjectId, products.update);

// Delete a Product with id
router.delete('/api/products/:id', validateObjectId, products.delete);

// Delete all Products
router.delete('/api/products', products.deleteAll);

module.exports = router;
