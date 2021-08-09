const mongoose = require('mongoose');

const WheelsSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
    },
    año: {
        type: Number,
        required: true,
        min: 1908,
    },
    km: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Wheels', WheelsSchema);
