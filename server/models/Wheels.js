const mongoose = require('mongoose');

function formatDate(date) {
    const day = ('0' + date.getDay()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
}

const WheelsSchema = new mongoose.Schema({
    tituloWheels: {
        type: String,
        required: true,
        trim: true,
    },
    descripcionWheels: {
        type: String,
        required: true,
    },
    ubicacionWheels: {
        type: String,
        required: true,
    },
    estadoWheels: {
        type: String,
        default: 'borrador',
        enum: ['borrador', 'publicado'],
    },
    fechaWheels: {
        type: String,
        default: formatDate(new Date()),
    },
    imagenWheels: [
        {
            type: String,
            required: true,
        },
    ],
});

module.exports = mongoose.model('Wheels', WheelsSchema);
