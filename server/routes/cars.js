// routes/cars.js
const express = require('express');
const router = express.Router();
const car = require('../models/car');

router.get('/', async (req, res) => {
    try {
        const cars = await car.find();

        const carsWithId = cars.map(car => {
            return {
                id: car._id.toString(), // convert ObjectId to string
                title: car.title,
                price: car.price,
                description: car.description,
                image: car.image,
                category: car.category,
                rating: car.rating,
                // add any other fields you want
            };
        });

        res.json(carsWithId);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
