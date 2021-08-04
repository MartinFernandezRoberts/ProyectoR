const mongoose = require('mongoose');

const DestacadoSchema = new mongoose.Schema({
    categoriaDestacado: {
        type: String,
        required: true,
        enum: ['Casa', 'Wheels'],
    },
    itemDestacado: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'categoriaDestacado',
    },
});

module.exports = mongoose.model('Destacado', DestacadoSchema);
