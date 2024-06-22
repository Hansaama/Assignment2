const Product = require('../models/product.model');

// Create and Save a new Product
exports.create = async (req, res) => {
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.status(201).send(savedProduct);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Retrieve all Products from the database
exports.findAll = async (req, res) => {
    const { name } = req.query;
    const filter = name ? { name: new RegExp(name, 'i') } : {};
    try {
        const products = await Product.find(filter);
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Find a single Product with an id
exports.findOne = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send();
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a Product by the id in the request
exports.update = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (!updatedProduct) {
            return res.status(404).send();
        }
        res.status(200).send(updatedProduct);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a Product with the specified id in the request
exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).send();
        }
        res.status(200).send(deletedProduct);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Delete all Products from the database
exports.deleteAll = async (req, res) => {
    try {
        await Product.deleteMany({});
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
};
