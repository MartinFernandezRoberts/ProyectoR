const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
/* const mongodb = require('mongodb')
const connectDB = require('../../config/db')
const { ensureAuth } = require('../../middleware/auth') */
const Item = require('../../models/Item');
const Wheels = require('../../models/Wheels');

const ImageUploader = require('./ImageUploader');
const imgUp = new ImageUploader('wheel');

// @desc api/Private page
// @route GET /staff/api/wheel

//GET
router.get('/', async (req, res) => {
    try {
        const wheels = await Item.find({
            tipo: 'Wheels',
            estado: 'publicado',
        })
            .sort('-fecha')
            .populate('item')
            .lean();

        res.send(wheels);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// @desc api/Private page
// @route POST /panel/api/wheel
router.post('/', imgUp.upload.array('files', 10), async (req, res) => {
    try {
        console.log(req.body);

        const wheel = await Wheels.create(req.body.wheel);

        const rutasImagenes = req.files.map(
            (file) => 'img/wheel/' + file.filename
        );
        await Item.create({
            tipo: 'Wheels',
            item: wheel._id,
            ...req.body.item,
            imagenes: rutasImagenes,
        });

        res.status(201).send('Wheels agregada');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// @desc api/Update
// @route PUT /panel/api/wheel
router.post(
    '/:id/editar',
    imgUp.upload.array('files', 10),
    async (req, res) => {
        try {
            console.log(req.body);
            let paBorrar = req.body.paBorrar || [];
            if (!Array.isArray(paBorrar)) paBorrar = [paBorrar];
            const item = await Item.findById(req.params.id).exec();
            let imagenes = item.get('imagenes');
            imagenes = imagenes.filter((imagen) => !paBorrar.includes(imagen));

            const rutasImagenes = req.files.map(
                (file) => 'img/wheel/' + file.filename
            );

            imagenes = imagenes.concat(rutasImagenes);

            // aquí se podría definir la destacada.

            await item.update({ ...req.body.item, imagenes });
            await Wheels.updateOne(
                { _id: item.item },
                { ...req.body.wheel, imagenes }
            );

            if (paBorrar.length > 0) {
                console.log(
                    'no hay pa borrar pero salgo igual y el if no anda'
                );
                paBorrar.forEach((imagen) => {
                    const rutaImagen = path.join(
                        __dirname,
                        '../../public/',
                        imagen
                    );

                    fs.unlink(rutaImagen, (err) => {
                        if (err) console.error(err);
                        console.log(`archivo eliminado: ${imagen}`);
                    });
                });
            }

            res.status(201).send('Wheels actualizada');
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
);

router.post('/:id/destacar', async (req, res) => {
    console.log(req.body);

    try {
        await Item.updateOne(
            { _id: req.params.id },
            { destacado: req.body.destacado }
        );
        res.status(201).send('Wheels actualizada');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

//delete
router.delete('/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        await Wheels.findByIdAndDelete(item.item);

        item.imagen.forEach((imagen) => {
            const rutaImagen = path.join(__dirname, '../../public/', imagen);

            fs.unlink(rutaImagen, (err) => {
                if (err) console.error(err);
                console.log(`archivo eliminado: ${imagen}`);
            });
        });

        res.status(201).send('Wheels eliminada');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;
