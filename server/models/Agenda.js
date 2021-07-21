// para un eventual cambio de json a bd
const mongoose = require('mongoose');

const AgendaSchema = new mongoose.Schema({
    ubicacion: {
        type: String,
        required: true,
        trim: true,
    },
    idBanner: {
        ref: 'Banner',
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    fechaIni: {
        type: Date,
        required: true,
    },
    fechaFin: {
        type: Date,
        required: true,
    },
    horario: {
        type: Boolean,
        default: false,
    },
    recurrencia: {
        type: String,
        trim: true,
    },
    iteracion: {
        type: Number,
    },
});

module.exports = mongoose.model('Agenda', AgendaSchema);
