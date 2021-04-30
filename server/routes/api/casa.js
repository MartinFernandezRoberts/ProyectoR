const express = require('express');
const router = express.Router();
/* const mongodb = require('mongodb')
const connectDB = require('../../config/db')
const { ensureAuth } = require('../../middleware/auth') */
const Casa = require('../../models/Casa');

// @desc api/Private page
// @route GET /panel/api/casa

//GET

router.get('/', async (req, res) => {
    try {
        const casa = await Casa.find().lean();
        res.send({
            casa,
        });
    } catch (err) {
        console.error(err);
    }
});

// @desc api/Private page
// @route POST /panel/api/casa
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        await Casa.create(req.body);

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