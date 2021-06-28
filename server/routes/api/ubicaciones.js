const express = require('express');
const router = express.Router();
const path = require('path');

const rutaBanners = path.join(__dirname, '../../jobs/banners.json');
const banners = require(rutaBanners);

//GET
router.get('/', async (req, res) => {
    try {
        const ubicaciones = Object.keys(banners);
        res.json(ubicaciones);
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;
