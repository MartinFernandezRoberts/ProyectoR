const express = require('express');
const fs = require('fs');
const path = require('path');
const { ensureAuth, ensureAdmin } = require('../../middleware/auth');
const router = express.Router();

const Item = require('../../models/Item');
const Casa = require('../../models/Casa');
const Wheels = require('../../models/Wheels');

const FileUploader = require('./FileUploader');
const fileUp = new FileUploader();

//GET publicados
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

//GET todo
router.get('/todo', ensureAuth, ensureAdmin, async (req, res) => {
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

//GET USER ITEMS
router.get('/userItems', ensureAuth, async (req, res) => {
    try {
        let user = req.user.id;
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

router.get('/user/:user', ensureAuth, ensureAdmin, async (req, res) => {
    try {
        const items = await Item.find({
            usuario: req.params.user,
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

router.get('/:item/docs/:ind', ensureAuth, ensureAdmin, async (req, res) => {
    try {
        const item = await Item.findById(req.params.item).lean();
        const doc = item.docs[req.params.ind];
        const rutaDoc = path.join(
            __dirname,
            '../../docs',
            String(item.usuario),
            doc
        );

        res.download(rutaDoc);
    } catch (err) {
        res.status(500).send(err);
    }
});

//POST crear
router.post(
    '/',
    ensureAuth,
    fileUp.upload.fields([
        { name: 'imagenes', maxCount: 10 },
        { name: 'docs', maxCount: 10 },
    ]),
    async (req, res) => {
        try {
            // console.log(req.body);
            // console.log(req.files);

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

            const imgFiles = req.files['imagenes'] ?? [];
            const rutasImagenes = imgFiles.map(
                (file) => `img/${tipo.toLowerCase()}/` + file.filename
            );

            const docs = {};
            const docFiles = req.files['docs'] ?? [];
            docFiles.forEach((file) => {
                docs[file.filename.slice(0, 4)] = file.filename;
            });

            await Item.create({
                ...req.body.info,
                item: item,
                usuario: req.user.id,
                imagenes: rutasImagenes,
                docs: docs,
            });

            res.status(201).send('Item agregado');
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
);

//Editar Post

router.post(
    '/:id/editar',
    fileUp.upload.fields([
        { name: 'imagenes', maxCount: 10 },
        { name: 'docs', maxCount: 10 },
    ]),
    ensureAuth,
    async (req, res) => {
        try {
            // console.log(req.body);
            let borrarDocs = req.body.borrarDocs || [];
            let borrarImg = req.body.borrarImg || [];
            let usuario = req.user.id;
            let item;

            if (!Array.isArray(borrarDocs)) borrarDocs = [borrarDocs];
            if (!Array.isArray(borrarImg)) borrarImg = [borrarImg];

            if (!req.user.google.administra) {
                item = await Item.find({
                    _id: req.params.id,
                    usuario: usuario,
                }).exec();
            } else {
                item = await Item.findById(req.params.id).exec();
            }

            let buff = borrarDocs;
            borrarDocs = {};

            buff.forEach((doc) => (borrarDocs[doc.slice(0, 4)] = doc));

            const docAgregados = {};
            const docFiles = req.files['docs'] ?? [];
            docFiles.forEach(
                (doc) => (docAgregados[doc.filename.slice(0, 4)] = doc.filename)
            );

            let docs = item.get('docs');
            Object.keys(borrarDocs).forEach((doc) => (docs[doc] = ''));
            docs = { ...docs, ...docAgregados };

            let imagenes = item.get('imagenes');
            imagenes = imagenes.filter((imagen) => !borrarImg.includes(imagen));

            const tipo = req.body.info.tipo;
            let itemTipo;

            switch (tipo) {
                case 'Casa':
                    itemTipo = await Casa.findByIdAndUpdate(
                        item.item,
                        req.body.detalles
                    );
                    break;

                case 'Wheels':
                    itemTipo = await Wheels.findByIdAndUpdate(
                        item.item,
                        req.body.detalles
                    );
                    break;

                default:
                    itemTipo = '';
                    break;
            }

            const imgFiles = req.files['imagenes'] ?? [];
            const rutasImagenes = imgFiles.map(
                (file) => `img/${tipo.toLowerCase()}/${file.filename}`
            );

            // aquí se podría definir la imagen destacada.

            imagenes = imagenes.concat(rutasImagenes);

            await item.updateOne({
                ...req.body.info,
                item: itemTipo._id,
                usuario: req.user.id,
                imagenes: imagenes,
                docs: docs,
            });

            if (borrarImg.length > 0) {
                //console.log(
                //    'no hay pa borrar pero salgo igual y el if no anda'
                //);
                borrarImg.forEach((imagen) => {
                    const rutaImagen = path.join(
                        __dirname,
                        '../../public/',
                        imagen
                    );

                    fs.unlink(rutaImagen, (err) => {
                        if (err) console.error(err);
                        // console.log(`archivo eliminado: ${imagen}`);
                    });
                });
            }

            Object.values(borrarDocs).forEach((doc) => {
                const rutaDoc = path.join(
                    __dirname,
                    '../../docs',
                    usuario,
                    doc
                );

                fs.unlink(rutaDoc, (err) => {
                    if (err) console.error(err);
                    // console.log(`archivo eliminado: ${doc}`);
                });
            });

            res.status(201).send('Item actualizado');
        } catch (err) {
            //console.error(err);
            res.status(500).send(err);
        }
    }
);

//Set Sorteo

router.post('/:id/setSorteo', ensureAuth, ensureAdmin, async (req, res) => {
    //console.log(req.body);
    try {
        await Item.updateOne({ _id: req.params.id }, { fecha: req.body.fecha });
        res.status(201).send('Fecha de Sorteo establecida');
    } catch (err) {
        //console.error(err);
        res.status(500).send(err);
    }
});

//cambiar estados

router.post('/:id/cambiarEstado', ensureAuth, ensureAdmin, async (req, res) => {
    //console.log(req.body);
    try {
        await Item.updateOne(
            { _id: req.params.id },
            { estado: req.body.estado }
        );
        res.status(201).send('Item actualizado al estado' + req.body.estado);
    } catch (err) {
        //console.error(err);
        res.status(500).send(err);
    }
});

//Destacados

router.post('/:id/destacar', ensureAuth, ensureAdmin, async (req, res) => {
    //console.log(req.body);
    try {
        await Item.updateOne(
            { _id: req.params.id },
            { destacado: req.body.destacado }
        );
        res.status(201).send('Item actualizado');
    } catch (err) {
        //console.error(err);
        res.status(500).send(err);
    }
});

//GET todo
router.get('/:id', ensureAuth, async (req, res) => {
    try {
        const item = await Item.findById(req.params.id).populate('item').lean();

        if (req.user.id === item.usuario) {
            res.status(403).send('Usuario no corresponde');
        } else {
            res.status(200).send(item);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

//eliminar item

router.delete('/:id', ensureAuth, ensureAdmin, async (req, res) => {
    try {
        let usuario = req.user.id;
        const tipo = req.body.info.tipo;

        switch (tipo) {
            case 'Casa':
                await Casa.findByIdAndDelete(item.item);
                break;
            case 'Wheels':
                await Wheels.findByIdAndDelete(item.item);
                break;
            default:
                break;
        }

        const item = await Item.findByIdAndDelete(req.params.id);

        item.imagenes.forEach((imagen) => {
            const rutaImagen = path.join(__dirname, '../../public/', imagen);

            fs.unlink(rutaImagen, (err) => {
                if (err) console.error(err);
                //console.log(`archivo eliminado: ${imagen}`);
            });
        });
        item.docs.forEach((doc) => {
            const rutaDocs = path.join(
                __dirname,
                '../../docs/',
                usuario,
                '/',
                doc
            );

            fs.unlink(rutaDocs, (err) => {
                if (err) console.error(err);
                //console.log(`archivo eliminado: ${imagen}`);
            });
        });

        res.status(201).send('Item eliminado');
    } catch (err) {
        //console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;
