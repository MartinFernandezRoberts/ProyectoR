const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
/* const mongodb = require('mongodb')
const connectDB = require('../../config/db')
const { ensureAuth } = require('../../middleware/auth') */
const Casa = require('../../models/Casa');
const Destacado = require('../../models/Destacado');

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
            (casa) => (casa.imagen = casa.imagen.map((imagen) => urlDe(imagen)))
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
        await Casa.create({ ...req.body, imagen: rutasImagenes });

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
                    titulo: req.body.titulo,
                    descripcion: req.body.descripcion,
                    ubicacion: req.body.ubicacion,
                    estado: req.body.estado,
                    fecha: req.body.fecha,
                },
                $push: {
                    imagenCasa: req.body.imagenCasa
                }
            },
            {
                upsert: true,
            }
        );
/*        const casa =
             casa.imagenCasa.forEach((imagen) => {
            const rutaImagen = path.join(__dirname, '../../public/', imagen);

            fs.unlink(rutaImagen, (err) => {
                if (err) console.error(err);
                console.log(`archivo eliminado: ${imagen}`);
            });
        }); */

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
        const casa = await Casa.findOneAndDelete({
            _id: req.params.id,
        });

        casa.imagen.forEach((imagen) => {
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
