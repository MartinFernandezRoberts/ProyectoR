const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
    },
    correo: {
        type: String,
    },
});

module.exports = mongoose.model('Sorteo', schema);
