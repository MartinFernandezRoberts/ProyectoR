const mongoose = require('mongoose');

const WheelsSchema = new mongoose.Schema({
    marca: {
        type: String,
    },
    categoria: {
        type: String,
        enum: [
            'Aéreos',
            'Autos, camionetas y 4x4',
            'Buses',
            'Camiones',
            'Casas rodantes',
            'Maquinarias',
            'Motos',
            'Náutica',
            'Otros',
        ],
    },
    year: {
        type: Number,
        min: 1908,
    },
    km: {
        type: Number,
    },
    cilindrada: {
        type: Number,
    },
    transmision: {
        type: String,
        enum: ['Automática', 'Manual'],
    },
    combustible: {
        type: String,
        enum: ['Bencina', 'Diesel', 'Eléctrico', 'Gas', 'Híbrido', 'Otro'],
    },
    abs: {
        type: Boolean,
    },
    airbag: {
        type: Boolean,
    },
    ac: {
        type: Boolean,
    },
    alarma: {
        type: Boolean,
    },
    vidriosElectricos: {
        type: Boolean,
    },
    color: {
        type: String,
    },
    rendimiento: {
        type: Number,
    },
});

module.exports = mongoose.model('Wheels', WheelsSchema);
