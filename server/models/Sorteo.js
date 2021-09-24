const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    ticket: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket',
    },
});

module.exports = mongoose.model('Sorteo', schema);
