const express = require('express');
const { ensureAuth } = require('../../middleware/auth');
const router = express.Router();
const Item = require('../../models/Item');
const Casa = require('../../models/Casa');
const Wheels = require('../../models/Wheels');

const FileUploader = require('./FileUploader');
const fileUp = new FileUploader();

//GET
router.get('/', async (req, res) => {
    try {
        const items = await Item.find({
            estado: 'publicado',
        })
            .sort('-fecha')
            .populate('item')
            .lean();

        res.send(items);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

//GET
router.get('/todo', async (req, res) => {
    try {
        const items = await Item.find({})
            .sort('-fecha')
            .populate('item')
            .populate('usuario')
            .lean();

        res.send(items);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

//POST
router.post(
    '/',
    ensureAuth,
    fileUp.upload.fields([
        { name: 'imagenes', maxCount: 10 },
        { name: 'docs', maxCount: 10 },
    ]),
    async (req, res) => {
        try {
            console.log(req.body);
            console.log(req.files);

            let item;
            const tipo = req.body.info.tipo;

            switch (tipo) {
                case 'Casa':
                    item = (await Casa.create(req.body.detalles))._id;
                    break;

                case 'Wheels':
                    item = (await Wheels.create(req.body.detalles))._id;
                    break;

                default:
                    item = '';
                    break;
            }

            const rutasImagenes = req.files['imagenes'].map(
                (file) => `img/${tipo.toLowerCase()}/` + file.filename
            );
            const rutasDocs = req.files['docs'].map((file) => file.filename);

            await Item.create({
                ...req.body.info,
                item: item,
                usuario: req.user.id,
                imagenes: rutasImagenes,
                docs: rutasDocs,
            });

            res.status(201).send('Item agregado');
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
);

//GET USER ITEMS
router.get('/userItems', ensureAuth, async (req, res) => {
    try {
        let user = req.user._id;
        const items = await Item.find({
            usuario: user,
        })
            .sort('-fecha')
            .populate('item')
            .lean();

        res.send(items);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;
