const express = require('express');
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
            .lean();

        res.send(items);
    } catch (err) {
        console.error(err);
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
            //console.log(req.body);
            let deleteDoc = req.body.deleteDoc || [];
            let deleteImg = req.body.deleteImg || [];
            let usuario = req.user.id;
            let item;

            if (!Array.isArray(deleteDoc)) deleteDoc = [deleteDoc];
            if (!Array.isArray(deleteImg)) deleteImg = [deleteImg];

            if (!req.user.google.administra) {
                item = await Item.find({
                    _id: req.params.id,
                    usuario: usuario,
                }).exec();
            } else {
                item = await Item.findById(req.params.id).exec();
            }

            let docs = item.get('docs');
            docs = docs.filter((doc) => !deleteDoc.includes(doc));

            let imagenes = item.get('imagenes');
            imagenes = imagenes.filter((imagen) => !deleteImg.includes(imagen));

            const tipo = req.body.info.tipo;

            switch (tipo) {
                case 'Casa':
                    item = await Casa.updateOne(
                        { _id: item.item },
                        { ...req.body.detalles }
                    );

                    break;

                case 'Wheels':
                    await Wheels.updateOne(
                        { _id: item.item },
                        { ...req.body.detalles }
                    );

                    break;

                default:
                    item = '';
                    break;
            }

            const rutasImagenes = req.files['imagenes'].map(
                (file) => `img/${tipo.toLowerCase()}/` + file.filename
            );
            const rutasDocs = req.files['docs'].map((file) => file.filename);

            // aquí se podría definir la destacada.

            imagenes = imagenes.concat(rutasImagenes);
            docs = docs.concat(rutasDocs);

            await item.update({
                ...req.body.info,
                item: item,
                usuario: req.user.id,
                imagenes: rutasImagenes,
                docs: rutasDocs,
            });

            if (deleteImg.length > 0) {
                //console.log(
                //    'no hay pa borrar pero salgo igual y el if no anda'
                //);
                deleteImg.forEach((imagen) => {
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

            if (deleteDoc.length > 0) {
                deleteImg.forEach((doc) => {
                    const rutaDoc = path.join(
                        __dirname,
                        '../../docs/',
                        usuario,
                        '/',
                        doc
                    );

                    fs.unlink(rutaDoc, (err) => {
                        if (err) console.error(err);
                        // console.log(`archivo eliminado: ${imagen}`);
                    });
                });
            }

            res.status(201).send('Item actualizado');
        } catch (err) {
            //console.error(err);
            res.status(500).send(err);
        }
    }
);

//eliminar item

router.delete('/:id', ensureAuth, ensureAdmin, async (req, res) => {
    try {
        let usuario = req.user.id;

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
        res.status(201).send('Item actualizado al estado' + estado);
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

router.get('/:id', ensureAuth, ensureAdmin, async (req, res) => {
    try {
        const items = await Item.find({
            usuario: req.params.id,
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

router.get('/:id/:item/:ind', ensureAuth, ensureAdmin, async (req, res) => {
    try {
        let usuario = req.params.id;
        let item = req.params.item;
        let ind = req.params.ind;

        const item = await Item.find({ _id: item, usuario: usuario });
        let doc = item.docs[ind];
        const rutaDoc = path.join(__dirname, '../../docs/', usuario, '/', doc);
        res.download(rutaDoc);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
