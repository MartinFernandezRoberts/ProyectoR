const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');

// const ImageUploader = require('./ImageUploader');
// const imgUp = new ImageUploader('casa');

//GET
router.get('/', async (req, res) => {
    try {
        const items = await Item.find({
            estado: 'publicado',
        })
            .sort('-fecha')
            .populate('item')
            .lean();

        res.send(items);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

//GET
router.get('/todo', async (req, res) => {
    try {
        const items = await Item.find({})
            .sort('-fecha')
            .populate('item')
            .lean();

        res.send(items);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;
