const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
/* const mongodb = require('mongodb')
const connectDB = require('../../config/db')
const { ensureAuth } = require('../../middleware/auth') */
const Item = require('../../models/Item');
const Casa = require('../../models/Casa');

const ImageUploader = require('./ImageUploader');
const imgUp = new ImageUploader('casa');

// @desc api/Private page
// @route GET /staff/api/casa

//GET
router.get('/', async (req, res) => {
    try {
        console.log('soy el get casa');
        const casas = await Item.find({
            tipo: 'Casa',
        })
            .sort('-fecha')
            .populate('item')
            .lean();

        res.send(casas);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

//GET
router.get('/todo', async (req, res) => {
    try {
        const casas = await Item.find({
            tipo: 'Casa',
        })
            .sort('-fecha')
            .populate('item')
            .lean();

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
        console.log(req.body);
        req.body.user = req.user.id;
        const casa = await Casa.create(req.body.casa);

        const rutasImagenes = req.files.map(
            (file) => 'img/casa/' + file.filename
        );
        await Item.create({
            tipo: 'Casa',
            item: casa._id,
            usuario: req.body.user,
            ...req.body.item,
            imagenes: rutasImagenes,
        });

        res.status(201).send('Casa agregada');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// @desc api/Update
// @route PUT /panel/api/casa
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
                (file) => 'img/casa/' + file.filename
            );

            imagenes = imagenes.concat(rutasImagenes);

            // aquí se podría definir la destacada.

            await item.update({ ...req.body.item, imagenes });
            await Casa.updateOne(
                { _id: item.item },
                { ...req.body.casa, imagenes }
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

            res.status(201).send('Casa actualizada');
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
        res.status(201).send('Casa actualizada');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

//delete
router.delete('/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        await Casa.findByIdAndDelete(item.item);

        item.imagen.forEach((imagen) => {
            const rutaImagen = path.join(__dirname, '../../public/', imagen);

            fs.unlink(rutaImagen, (err) => {
                if (err) console.error(err);
                console.log(`archivo eliminado: ${imagen}`);
            });
        });

        res.status(201).send('Casa eliminada');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;
