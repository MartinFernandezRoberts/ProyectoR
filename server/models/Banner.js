const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
    tituloBanner: {
        type: String,
        required: false,
    },
    imagenBanner: {
        ref: 'Imagen',
        type: mongoose.Schema.Types.ObjectId,
    },
    urlBanner: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Banner', BannerSchema);
