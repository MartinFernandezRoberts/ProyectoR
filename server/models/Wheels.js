const mongoose = require('mongoose');

function formatDate(date) {
    const day = ('0' + date.getDay()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
}

const WheelsSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model('Wheels', WheelsSchema);
