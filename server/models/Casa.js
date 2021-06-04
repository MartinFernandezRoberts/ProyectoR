const mongoose = require('mongoose');

function formatDate(date) {
    const day = ('0' + date.getDay()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
}

const CasaSchema = new mongoose.Schema({
    tituloCasa: {
        type: String,
        required: true,
        trim: true,
    },
    descripcionCasa: {
        type: String,
        required: true,
    },
    ubicacionCasa: {
        type: String,
        required: true,
    },
    estadoCasa: {
        type: String,
        default: 'borrador',
        enum: ['borrador', 'publicado'],
    },
    fechaCasa: {
        type: String,
        default: formatDate(new Date()),
    },
    imagenCasa: [
        {
            ref: 'Imagen',
            type: mongoose.Schema.Types.ObjectId,
        },
    ],
});

module.exports = mongoose.model('Casa', CasaSchema);