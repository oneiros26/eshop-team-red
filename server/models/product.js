const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    image: String,
    category: String,
    rating: {
        rate: Number,
        count: Number
    },
});

module.exports = mongoose.model('product', productSchema);