const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true,
        enum: ['Casa', 'Wheels'],
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'tipo',
    },
    titulo: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        default: 'borrador',
        enum: ['borrador', 'publicado', 'bajado'],
    },
    comuna: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        default: new Date(),
    },
    imagenes: [
        {
            type: String,
            required: true,
        },
    ],
    destacado: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Item', schema);
