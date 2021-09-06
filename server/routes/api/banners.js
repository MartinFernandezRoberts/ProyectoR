const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { ensureAuth, ensureAdmin } = require('../../middleware/auth');
const Banner = require('../../models/Banner');

const FileUploader = require('./FileUploader');
const fileUp = new FileUploader();

const rutaAgenda = path.join(__dirname, '../../jobs/agenda.json');
const agenda = require(rutaAgenda);

// GET
router.get('/', ensureAuth, ensureAdmin, async (req, res) => {
    try {
        let banners = await Banner.find().lean();
        banners.forEach((banner) => {
            banner.agenda = agenda.filter(
                (evento) => evento.idBanner == banner._id
            );
        });

        res.status(200).send(banners);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// GET (por ubicación)
router.get('/:ubicacion', ensureAuth, ensureAdmin, async (req, res) => {
    try {
        // const rutaBanners = path.join(__dirname, '../../jobs/banners.json');
        const banners = require('../../jobs/banners.json');
        const ubicacion = banners[req.params.ubicacion];
        const idBanner = ubicacion.idBanner || ubicacion.default;

        const banner = await Banner.findById(idBanner).lean();

        res.status(200).send(banner);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// POST
router.post(
    '/',
    ensureAuth,
    ensureAdmin,
    fileUp.upload.single('file'),
    async (req, res) => {
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
    }
);

// POST
router.post(
    '/:id/editar',
    ensureAuth,
    ensureAdmin,
    fileUp.upload.single('file'),
    async (req, res) => {
        try {
            const data = req.body;
            if (req.file)
                data.imagenBanner = 'img/banners/' + req.file.filename;

            const banner = await Banner.findByIdAndUpdate(req.params.id, data);

            if (req.file) {
                const rutaImagen = path.join(
                    __dirname,
                    '../../public/',
                    banner.imagenBanner
                );
                fs.unlink(rutaImagen, (err) => {
                    if (err) console.error(err);
                    console.log(`archivo eliminado: ${banner.imagen}`);
                });
            }

            res.status(201).send('Banner actualizado.');
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
);

// DELETE
router.delete('/:id', ensureAuth, ensureAdmin, async (req, res) => {
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

        res.status(200).send('Registro Eliminado.');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;
