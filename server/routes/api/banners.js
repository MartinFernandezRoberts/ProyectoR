const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const Banner = require('../../models/Banner');
const Imagen = require('../../models/Imagen');

const ImageUploader = require('./ImageUploader');
const imgUp = new ImageUploader('banners');

// GET
router.get('/', async (req, res) => {
    try {
        const banners = await Banner.find().populate('imagenBanner').lean();
        res.status(200).send({
            banners,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// GET (por ubicación)
router.get('/:ubicacion', async (req, res) => {
    try {
        const rutaBanners = path.join(__dirname, '../../jobs/banners.json');
        const banners = require(rutaBanners);
        const ubicacion = banners[req.params.ubicacion];
        const bannerId = ubicacion.bannerId || ubicacion.default;

        const banner = await Banner.findById(bannerId)
            .populate('imagenBanner')
            .lean();
        res.status(200).send(banner.imagenBanner.url);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// POST
router.post('/', imgUp.upload.single('file'), async (req, res) => {
    try {
        const url = req.protocol + '://' + req.get('host');

        const img = new Imagen({
            url: url + '/img/banners/' + (await req.file.filename),
        });
        img.save();
        console.log(img);

        console.log(req.body);
        // un banner tiene ruta_imagen, url
        await Banner.create({ ...req.body, imagenBanner: img._id });
        res.status(201).send('Banner añadido.');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Banner.findOneAndDelete({
            _id: req.params.id,
        });
        //findOneAndDELETE
        res.status(200).send('Registro Eliminado');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// Agenda
router.post('/agendar', async (req, res) => {
    const rutaAgenda = path.join(__dirname, '../../jobs/agenda.json');
    if (!fs.existsSync(rutaAgenda))
        fs.writeFileSync(rutaAgenda, JSON.stringify([]));
    const agenda = require(rutaAgenda);

    try {
        agenda.push(req.body);
        await fs.promises.writeFile(rutaAgenda, JSON.stringify(agenda));

        console.log('Banner agendado.');
        res.status(201).send('Banner agendado.');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;
