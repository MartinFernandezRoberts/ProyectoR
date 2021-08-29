const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    tipo: {
        type: String,
        enum: ['Casa', 'Wheels', null],
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'tipo',
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    titulo: {
        type: String,
        trim: true,
    },
    descripcion: {
        type: String,
    },
    estado: {
        type: String,
        default: 'borrador',
        enum: ['borrador', 'pendiente', 'publicado', 'bajado'],
    },
    comuna: {
        type: String,
    },
    fecha: {
        type: Date,
        default: new Date(),
    },
    imagenes: [
        {
            type: String,
        },
    ],
    destacado: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Item', schema);
