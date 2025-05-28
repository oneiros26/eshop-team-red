
const express = require('express');
const router = express.Router();
const product = require('../models/product');

// GET all products
router.get('/', async (req, res) => {
    try {
        const products = await product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
