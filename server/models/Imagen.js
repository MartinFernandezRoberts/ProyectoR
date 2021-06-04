const mongoose = require('mongoose')

const ImagenSchema = new mongoose.Schema({
    url: {
        type: String
    },

})

module.exports = mongoose.model('Imagen', ImagenSchema)