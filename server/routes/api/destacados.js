const express = require('express');
const router = express.Router();
const Destacado = require('../../models/Destacado');

router.get('/', async (req, res) => {
    try {
        let destacados = await Destacado.find()
            .populate('itemDestacado')
            .lean();

        res.send(destacados);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

router.get('/lista', async (req, res) => {
    try {
        const destacados = await Destacado.find().lean();
        res.send(destacados);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        await Destacado.create(req.body);

        res.status(201).send('Agregado a destacados');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Destacado.findOneAndDelete({
            itemDestacado: req.params.id,
        });

        res.status(201).send('Eliminado de destacados');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;
