const mongoose = require('mongoose');


const BannerSchema = new mongoose.Schema({
    rutaImagen: {
        type: String,
        required: true,
    },
    urlBanner: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Banner', BannerSchema);