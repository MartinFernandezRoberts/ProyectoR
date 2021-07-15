const express = require('express');
const router = express.Router();
/* const mongodb = require('mongodb')
const connectDB = require('../../config/db')
const { ensureAuth } = require('../../middleware/auth') */
const Wheels = require('../../models/Wheels');
const Imagen = require('../../models/Imagen');

const ImageUploader = require('./ImageUploader');
const imgUp = new ImageUploader('wheels');

// @desc api/Private page
// @route GET /panel/api/wheels

//GET
router.get('/', async (req, res) => {
    try {
        const wheels = await Wheels.find()
            .populate('imagenWheels')
            .lean();
        res.send({
            wheels,
        });
    } catch (err) {
        console.error(err);
    }
});

// @desc api/Private page
// @route POST /panel/api/wheels
router.post('/', imgUp.upload.array('files', 10), async (req, res) => {
    try {
        const fileIds = [];
        const url = req.protocol + '://' + req.get('host');

        await req.files.forEach(async function(file) {
            const img = new Imagen({
                url: url + '/img/wheels/' + (await file.filename),
            });
            img.save();
            console.log(img);
            fileIds.push(img._id);
        });

        console.log(fileIds);

        console.log(req.body);
        await Wheels.create({ ...req.body, imagenWheels: fileIds });

        res.status(201).send('Registro Agregado');
    } catch (err) {
        console.error(err);
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
                    tituloWheels: req.body.tituloWheels,
                    descripcionWheels: req.body.descripcionWheels,
                    ubicacionWheels: req.body.ubicacionWheels,
                    estadoWheels: req.body.estadoWheels,
                    fechaWheels: req.body.fechaWheels,
                },
            },
            {
                upsert: true,
            }
        );
        res.status(201).send('Registro Actualizado');
    } catch (err) {
        console.error(err);
    }
});
//delete
router.delete('/:id', async (req, res) => {
    try {
        await Wheels.findOneAndDelete({
            _id: req.params.id
        });
        //findOneAndDELETE
        res.status(201).send('Registro Eliminado');
        
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;