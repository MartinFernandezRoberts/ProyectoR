const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
/* const mongodb = require('mongodb')
const connectDB = require('../../config/db')
const { ensureAuth } = require('../../middleware/auth') */
const Casa = require('../../models/Casa');

const ImageUploader = require('./ImageUploader');
const imgUp = new ImageUploader('casa');

const urlDe = (ruta) => process.env.HOST_URL + ruta;

// @desc api/Private page
// @route GET /staff/api/casa

//GET
router.get('/', async (req, res) => {
    try {
        let casas = await Casa.find().lean();
        casas.forEach(
            (casa) =>
                (casa.imagenCasa = casa.imagenCasa.map((imagen) =>
                    urlDe(imagen)
                ))
        );

        res.send(casas);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// @desc api/Private page
// @route POST /panel/api/casa
router.post('/', imgUp.upload.array('files', 10), async (req, res) => {
    try {
        const rutasImagenes = req.files.map(
            (file) => 'img/casa/' + file.filename
        );

        console.log(req.body);
        await Casa.create({ ...req.body, imagenCasa: rutasImagenes });

        res.status(201).send('Registro Agregado');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// @desc api/Update
// @route PUT /panel/api/casa
router.put('/editar/:id', async (req, res) => {
    try {
        await Casa.findOneAndUpdate(
            {
                _id: req.params.id,
            },
            {
                $set: {
                    tituloCasa: req.body.tituloCasa,
                    descripcionCasa: req.body.descripcionCasa,
                    ubicacionCasa: req.body.ubicacionCasa,
                    estadoCasa: req.body.estadoCasa,
                    fechaCasa: req.body.fechaCasa,
                },
            },
            {
                upsert: true,
            }
        );
        res.status(201).send('Registro Actualizado');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});
//delete
router.delete('/:id', async (req, res) => {
    try {
        const casa = await Casa.findOneAndDelete({
            _id: req.params.id,
        });

        casa.imagenCasa.forEach((imagen) => {
            const rutaImagen = path.join(__dirname, '../../public/', imagen);

            fs.unlink(rutaImagen, (err) => {
                if (err) console.error(err);
                console.log(`archivo eliminado: ${imagen}`);
            });
        });

        res.status(201).send('Registro Eliminado');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;
