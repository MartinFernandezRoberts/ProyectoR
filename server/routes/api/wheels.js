const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
/* const mongodb = require('mongodb')
const connectDB = require('../../config/db')
const { ensureAuth } = require('../../middleware/auth') */
const Wheels = require('../../models/Wheels');
const Destacado = require('../../models/Destacado');

const ImageUploader = require('./ImageUploader');
const imgUp = new ImageUploader('wheels');

// @desc api/Private page
// @route GET /panel/api/wheels

//GET
router.get('/', async (req, res) => {
    try {
        const wheels = await Wheels.find().lean();
        res.send({
            wheels,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// @desc api/Private page
// @route POST /panel/api/wheels
router.post('/', imgUp.upload.array('files', 10), async (req, res) => {
    try {
        const rutasImagenes = req.files.map(
            (file) => 'img/wheels/' + file.filename
        );

        console.log(req.body);
        await Wheels.create({ ...req.body, imagen: rutasImagenes });

        res.status(201).send('Registro Agregado');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// @desc api/Update
// @route PUT /panel/api/wheels
router.put('/editar/:id', async (req, res) => {
    try {
        await Wheels.findOneAndUpdate(
            {
                _id: req.params.id,
            },
            {
                $set: {
                    titulo: req.body.titulo,
                    descripcion: req.body.descripcion,
                    ubicacion: req.body.ubicacion,
                    estado: req.body.estado,
                    fecha: req.body.fecha,
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
        await Destacado.deleteOne({
            itemDestacado: req.params.id,
        });
        const wheels = await Wheels.findOneAndDelete({
            _id: req.params.id,
        });

        wheels.imagenCasa.forEach((imagen) => {
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
