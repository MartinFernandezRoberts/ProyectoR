const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');

router.get('/', async (req, res) => {
    try {
        let destacados = await Item.find({ destacado: true })
            .populate('item')
            .lean();

        res.send(destacados);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;
