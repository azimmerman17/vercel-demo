const mongoose = require('mongoose')

const vehicleShema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    manufacturer: {
        type: String
    },
    horsePower: {
        type: Number
    }
})

module.exports = mongoose.model('Vehicle', vehicleShema)