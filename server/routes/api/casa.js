const express = require('express');
const router = express.Router();
/* const mongodb = require('mongodb')
const connectDB = require('../../config/db')
const { ensureAuth } = require('../../middleware/auth') */
const Casa = require('../../models/Casa');
const Imagen = require('../../models/Imagen');

const ImageUploader = require('./ImageUploader');
const imgUp = new ImageUploader('casa');

// @desc api/Private page
// @route GET /staff/api/casa

//GET
router.get('/', async (req, res) => {
    try {
        const casa = await Casa.find()
            .populate('imagenCasa')
            .lean();
        res.send({
            casa,
        });
    } catch (err) {
        console.error(err);
    }
});

// @desc api/Private page
// @route POST /panel/api/casa
router.post('/', imgUp.upload.array('files', 10), async (req, res) => {
    try {
        const fileIds = [];
        const url = req.protocol + '://' + req.get('host');

        await req.files.forEach(async function(file) {
            const img = new Imagen({
                url: url + '/img/casa/' + (await file.filename),
            });
            img.save();
            console.log(img);
            fileIds.push(img._id);
        });

        console.log(fileIds);

        console.log(req.body);
        await Casa.create({ ...req.body, imagenCasa: fileIds });

        res.status(201).send('Registro Agregado');
    } catch (err) {
        console.error(err);
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
    }
});
//delete
router.delete('/:id', async (req, res) => {
    try {
        await Casa.findOneAndDelete({
            _id: req.params.id
        });
        //findOneAndDELETE
        res.status(201).send('Registro Eliminado');
        
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;