const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const Banner = require('../../models/Banner');
const Imagen = require('../../models/Imagen');

const ImageUploader = require('./ImageUploader');
const imgUp = new ImageUploader('banners');

//GET
router.get('/', async (req, res) => {
    try {
        const banners = await Banner.find()
            .populate('imagenBanner')
            .lean();
        res.send({
            banners,
        });
    } catch (err) {
        console.error(err);
    }
});

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
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Banner.findOneAndDelete({
            _id: req.params.id,
        });
        //findOneAndDELETE
        res.status(201).send('Registro Eliminado');
    } catch (err) {
        console.error(err);
    }
});

// Agenda
const rutaAgenda = path.join(__dirname, '../../jobs/agenda.json');
if (!fs.existsSync(rutaAgenda))
    fs.writeFileSync(rutaAgenda, JSON.stringify([]));
const agenda = require(rutaAgenda);

router.post('/agendar', async (req) => {
    try {
        console.log('algún día podré agendar banners');
        // ubicación    string
        // id_banner    id
        // fecha_ini    string (ISO 8601)
        // fecha_fin    string (ISO 8601)
        // horario      bool
        // recurrencia  enum ['continuado', 'semanal']
        // iteración    num
        const {
            ubicación,
            idBanner,
            fechaIni,
            fechaFin,
            horario,
            recurrencia,
            iteración,
        } = req.body;

        let newAgenda = {
            ubicación,
            idBanner,
            fechaIni,
            fechaFin,
            horario,
            recurrencia,
            iteración,
        };

        agenda.push(newAgenda);
        await fs.promises.writeFile(rutaAgenda, JSON.stringify(agenda));
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;
