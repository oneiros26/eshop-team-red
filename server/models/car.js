// models/car.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    id: String,
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

module.exports = mongoose.model('Car', carSchema, 'cars_shop');

