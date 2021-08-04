const mongoose = require('mongoose');

function formatDate(date) {
    const day = ('0' + date.getDay()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
}

const CasaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    ubicacion: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        default: 'borrador',
        enum: ['borrador', 'publicado'],
    },
    fecha: {
        type: String,
        default: formatDate(new Date()),
    },
    imagen: [
        {
            type: String,
            required: true,
        },
    ],
    area: {
        type: Number,
    },
    wc: {
        type: Number,
    },
    orientacion: {
        type: String,
        default: '',
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
