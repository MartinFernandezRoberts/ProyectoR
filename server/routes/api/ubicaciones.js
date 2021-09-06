const express = require('express');
const router = express.Router();
const path = require('path');

const { ensureAuth, ensureAdmin } = require('../../middleware/auth');
const rutaBanners = path.join(__dirname, '../../jobs/banners.json');
const banners = require(rutaBanners);

//GET
router.get('/', ensureAuth, ensureAdmin, async (req, res) => {
    try {
        const ubicaciones = Object.keys(banners);
        res.json(ubicaciones);
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;
