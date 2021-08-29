const mongoose = require('mongoose');

const CasaSchema = new mongoose.Schema({
    ubicacion: {
        type: String,
        required: true,
    },
    area: {
        type: Number,
    },
    construido: {
        type: Number,
    },
    wc: {
        type: Number,
    },
    orientacion: {
        type: String,
        enum: [
            'Oriente',
            'Poniente',
            'Norte',
            'Sur',
            'Nororiente',
            'Norponiente',
            'Suroriente',
            'Surponiente',
        ],
    },
    estacionamiento: {
        type: Number,
    },
    dormitorio: {
        type: Number,
    },
    piso: {
        type: Number,
    },
    bodega: {
        type: Boolean,
        default: false,
    },
    mascotas: {
        type: Boolean,
        default: false,
    },
    calefaccion: {
        type: Boolean,
        default: false,
    },
    cocina: {
        type: Boolean,
        default: false,
    },
    terraza: {
        type: Boolean,
        default: false,
    },
    balcon: {
        type: Boolean,
        default: false,
    },
    piscina: {
        type: Boolean,
        default: false,
    },
    quincho: {
        type: Boolean,
        default: false,
    },
    gastosComunes: {
        type: Number,
    },
    piscinaE: {
        type: Boolean,
        default: false,
    },
    gimnasioE: {
        type: Boolean,
        default: false,
    },
    lavanderiaE: {
        type: Boolean,
        default: false,
    },
    eventosE: {
        type: Boolean,
        default: false,
    },
    quinchoE: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Casa', CasaSchema);
