const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    numero: {
        type: Number,
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

module.exports = mongoose.model('Ticket', TicketSchema);
