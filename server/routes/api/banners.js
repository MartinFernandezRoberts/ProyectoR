const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const Banner = require('../../models/Banner');

const ImageUploader = require('./ImageUploader');
const imgUp = new ImageUploader('banners');

const rutaAgenda = path.join(__dirname, '../../jobs/agenda.json');
const agenda = require(rutaAgenda);

const urlDe = (ruta) => process.env.HOST_URL + ruta;

// GET
router.get('/', async (req, res) => {
    try {
        let banners = await Banner.find().lean();
        banners.forEach((banner) => {
            banner.agenda = agenda.filter(
                (evento) => evento.idBanner == banner._id
            );
            banner.imagenBanner = urlDe(banner.imagenBanner);
        });

        res.status(200).send(banners);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// GET (por ubicación)
router.get('/:ubicacion', async (req, res) => {
    try {
        // const rutaBanners = path.join(__dirname, '../../jobs/banners.json');
        const banners = require('../../jobs/banners.json');
        const ubicacion = banners[req.params.ubicacion];
        const idBanner = ubicacion.idBanner || ubicacion.default;

        const banner = await Banner.findById(idBanner).lean();

        res.status(200).send(urlDe(banner.imagenBanner));
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// POST
router.post('/', imgUp.upload.single('file'), async (req, res) => {
    try {
        console.log(req.body);

        await Banner.create({
            ...req.body,
            imagenBanner: 'img/banners/' + req.file.filename,
        });

        res.status(201).send('Banner añadido.');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const banner = await Banner.findOneAndDelete({
            _id: req.params.id,
        });

        const rutaImagen = path.join(
            __dirname,
            '../../public/',
            banner.imagenBanner
        );
        fs.unlink(rutaImagen, (err) => {
            if (err) console.error(err);
            console.log(`archivo eliminado: ${banner.imagenBanner}`);
        });

        res.status(200).send('Registro Eliminado');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;
